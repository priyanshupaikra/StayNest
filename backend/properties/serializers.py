from rest_framework import serializers
from .models import Property, PropertyImage

class PropertyImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PropertyImage
        fields = ['id', 'image_url', 'is_primary']

class PropertySerializer(serializers.ModelSerializer):
    images = PropertyImageSerializer(many=True, read_only=True)
    host_name = serializers.CharField(source='host.username', read_only=True)
    
    class Meta:
        model = Property
        fields = '__all__'
        read_only_fields = ['host']
