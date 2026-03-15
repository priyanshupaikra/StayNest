from properties.models import Property
from django.contrib.auth.models import User

user, _ = User.objects.get_or_create(username='admin')

Property.objects.create(
    host=user,
    title="Cozy Cabin in the Woods",
    description="A beautiful cozy cabin nestled deeply into the forest.",
    property_type="cabin",
    price=150.00,
    city="Boulder",
    country="USA",
    bedrooms=2,
    bathrooms=1.5,
    max_guests=4,
)
print("Dummy property created.")
