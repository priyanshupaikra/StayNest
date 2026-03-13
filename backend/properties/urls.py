from django.urls import path
from .views import PropertyListView, PropertyDetailView, MyPropertiesView

urlpatterns = [
    path('', PropertyListView.as_view(), name='property-list'),
    path('my-listings/', MyPropertiesView.as_view(), name='my-properties'),
    path('<int:pk>/', PropertyDetailView.as_view(), name='property-detail'),
]
