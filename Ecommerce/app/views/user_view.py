from django.shortcuts import render
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User

from app.serializer.user_serializer import *



from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from app.models import *

from django.contrib.auth.hashers import make_password


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)
        print(data)
        print(self.user)
        serializer = UserSerializerWithToken(self.user).data
        print(serializer)
        for k, v in serializer.items():
            data[k] = v

        return data



class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer





@api_view(['POST'])
def RegisterUser(request):

    data = request.data


    try:
        userinstance = User.objects.create(
            username = data['username'],
            password = make_password(data['password'])
        )



        Seller_Profile.objects.create(
            user = userinstance,
            account_type= data['account_type'],
            adminaccess = data['password']

        )

        print(userinstance)


        serializer = UserSerializerWithToken(userinstance , many=False)
        return Response(serializer.data)

    except:
        message = {'detail':'User with this email already exixts'}
        return Response(message , status=status.HTTP_400_BAD_REQUEST)


    print(data)
    return Response({})











