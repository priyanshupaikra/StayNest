from django.db import models
from django.contrib.auth.models import User

class Property(models.Model):
    # Host of the property
    host = models.ForeignKey(User, on_delete=models.CASCADE, related_name='properties')
    
    # Basic Information
    title = models.CharField(max_length=255)
    description = models.TextField()
    property_type = models.CharField(max_length=100) # e.g., 'Villa', 'Cabin', 'Apartment'
    
    # Pricing
    price = models.DecimalField(max_digits=10, decimal_places=2)
    
    # Location
    city = models.CharField(max_length=100)
    country = models.CharField(max_length=100)
    location_details = models.TextField(blank=True, null=True)
    
    # Details & Capacities
    bedrooms = models.IntegerField(default=1)
    bathrooms = models.DecimalField(max_digits=3, decimal_places=1, default=1.0)
    max_guests = models.IntegerField(default=1)
    
    # Media: Default image (for simplicity, we can also have a separate PropertyImage model)
    image = models.ImageField(upload_to='property_images/', blank=True, null=True)
    
    # Status
    is_active = models.BooleanField(default=True)
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.title} - {self.city}"

class PropertyImage(models.Model):
    """
    If a host uploads multiple photos, they'll land in this table.
    """
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='images')
    image_url = models.URLField(max_length=500)
    is_primary = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Image for {self.property.title}"
