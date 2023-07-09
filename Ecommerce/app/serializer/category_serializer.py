from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from app.models import *





class CategorySerializer(serializers.ModelSerializer):


    class Meta:
        model = Category
        fields = [  'id' ,'name' , 'parent' ,'level']




class CategoryNestedSerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = [  'id' ,'name' , 'parent' ,'level','children']

    def get_children(self, obj):
        return CategoryNestedSerializer(obj.get_children(), many=True).data