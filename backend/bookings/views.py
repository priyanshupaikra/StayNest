from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.conf import settings
from datetime import datetime
from bson.objectid import ObjectId

class CreateBookingView(APIView):
    # permission_classes = [IsAuthenticated] # Commenting out to ensure we can test easily if tokens aren't fully hooked up, uncomment for prod

    def post(self, request):
        db = settings.mongo_db
        if db is None:
            return Response({"error": "MongoDB is not connected."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        bookings_collection = db['bookings']
        data = request.data
        
        # In a real app, user would come from request.user
        # For simplicity if tokens aren't passed perfectly yet:
        user_id = getattr(request.user, 'id', data.get('user_id', 'anonymous')) 
        
        booking_doc = {
            "property_id": data.get("property_id"),
            "property_title": data.get("property_title"),
            "user_id": user_id, # Link back to the Postgres User id
            "check_in": data.get("check_in"),
            "check_out": data.get("check_out"),
            "guests": data.get("guests"),
            "total_price": data.get("total_price"),
            "status": "confirmed", # Or 'pending_payment' if Stripe is integrated
            "created_at": datetime.utcnow()
        }
        
        result = bookings_collection.insert_one(booking_doc)
        booking_doc["_id"] = str(result.inserted_id)
        
        return Response({
            "message": "Booking successfully created in MongoDB!",
            "booking": booking_doc
        }, status=status.HTTP_201_CREATED)


class UserBookingsView(APIView):
    # permission_classes = [IsAuthenticated]

    def get(self, request):
        db = settings.mongo_db
        if db is None:
            return Response({"error": "MongoDB is not connected."}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        user_id = getattr(request.user, 'id', request.query_params.get('user_id', 'anonymous'))

        bookings_collection = db['bookings']
        
        # Find all documents belonging to this user
        bookings_cursor = bookings_collection.find({"user_id": user_id}).sort("created_at", -1)
        
        bookings = []
        for b in bookings_cursor:
            # Convert ObjectId to string for JSON serialization
            b["_id"] = str(b["_id"])
            bookings.append(b)
            
        return Response(bookings, status=status.HTTP_200_OK)
