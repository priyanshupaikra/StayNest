from django.urls import path
from . import views

urlpatterns = [
    path('', views.UserBookingsView.as_view(), name='user-bookings'),
    path('create/', views.CreateBookingView.as_view(), name='create-booking'),
]
