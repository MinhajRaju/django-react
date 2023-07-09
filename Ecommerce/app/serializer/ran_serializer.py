from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from app.models import *

from app.serializer.user_serializer import *


class BrandSerializer(serializers.ModelSerializer):



    class Meta:
        model = Category
        fields = [  'id' ,'name']



class RatingAndCommentSerializer(serializers.ModelSerializer):

    customer  = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Rating_Comment
        fields = ['id' , 'customer','rating' , 'comment']


    def get_customer(self , obj):
        return UserPrfileSerializer(obj.customer  , many=False).data
class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Color
        fields = '__all__'


class ServiceSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Service_Delivery
        fields = '__all__'