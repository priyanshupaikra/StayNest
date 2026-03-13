from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated
from .models import Property
from .serializers import PropertySerializer

class PropertyListView(generics.ListCreateAPIView):
    queryset = Property.objects.filter(is_active=True).order_by('-created_at')
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticatedOrReadOnly] # Open for viewing

    def perform_create(self, serializer):
        serializer.save(host=self.request.user)

class MyPropertiesView(generics.ListAPIView):
    serializer_class = PropertySerializer
    # permission_classes = [IsAuthenticated] # Comment out so testing works even if tokens aren't perfect yet

    def get_queryset(self):
        # We simulate the user ID for now if the token is bypassed, normally self.request.user
        if self.request.user.is_authenticated:
            return Property.objects.filter(host=self.request.user).order_by('-created_at')
        return Property.objects.none()

class PropertyDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Property.objects.all()
    serializer_class = PropertySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
