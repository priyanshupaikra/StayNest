from django.db import models
from django.contrib.auth.models import User
from properties.models import Property

class Review(models.Model):
    property = models.ForeignKey(Property, on_delete=models.CASCADE, related_name='reviews')
    guest = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews_given')
    rating = models.DecimalField(max_digits=3, decimal_places=2) # e.g., 4.95
    comment = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Review by {self.guest.username} for {self.property.title}"
