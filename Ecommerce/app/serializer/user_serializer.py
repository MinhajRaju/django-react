from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from app.models import *





class UserSerializer(serializers.ModelSerializer):

    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)


    class Meta:
        model = User
        fields = ['id' , '_id' , 'username' , 'email' , 'name' , 'isAdmin']

    def get__id(self , obj):
        return obj.id

    def get_isAdmin(self , obj):
        return obj.is_staff

    def get_name(self , obj):
        name = obj.first_name
        if name =='':
            name = obj.email
        return name


class  SellerProfileSeriazlier(serializers.ModelSerializer):


    user = serializers.SerializerMethodField(read_only =True)


    class Meta:
        model = Seller_Profile
        fields = ['account_type','id' , 'user']


    def get_user(self, obj):
        return UserSerializer(obj.user , many=False).data


class UserSerializerWithToken(UserSerializer):

    token = serializers.SerializerMethodField(read_only=True)
    seller = serializers.SerializerMethodField(read_only=True)




    class Meta:
        model = User
        fields = ['id', '_id', 'username', 'email', 'name', 'isAdmin', 'token','seller' ]

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)

    def get_seller(self , obj):
        return SellerProfileSeriazlier(obj.seller_profile_set.all() , many=True).data







####

















class UserPrfileSerializer(serializers.ModelSerializer):


    user = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Userprofile
        fields = ['phone', 'address' , 'user']

    def get_user(self  , obj):
        return UserSerializer(obj.user , many=False).data




