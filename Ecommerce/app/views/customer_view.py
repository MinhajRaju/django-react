from django.shortcuts import render
from rest_framework.decorators import api_view , permission_classes
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework.response import Response

from django.contrib.auth.models import User
from app.serializer.user_serializer import *
from app.serializer.order_serializer import *

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import status
from app.models import *

from django.contrib.auth.hashers import make_password





@api_view(['GET' , 'POST'])
def RegisterCustomer(request):
    data = request.data
    print(data)

    try:
        userinstance = User.objects.create(
            username = data['username'],
            password = make_password(data['password']),
            email = data['email']
        )
        Userprofile.objects.create(
            user = userinstance,
        )
        print(userinstance)
        serializer = UserSerializerWithToken(userinstance , many=False)
        return Response(serializer.data)

    except:
        message = {'detail':'User with this email already exixts'}
        return Response(message , status=status.HTTP_400_BAD_REQUEST)
    return Response({})




@api_view(['GET','POST'])
def customerProfileDetails(request , pk):
    user = User.objects.get(id=pk)
    print(user)
    serializer  = getCutomerPorfileDetailSerializer(user , many=False)
    return Response(serializer.data)


@api_view(["GET","POST"])
def customerShippingAddress(request):

    shipAddressInstance = shippingAddress.objects.filter(customer=1)
    serializer = ShippingSerializer(shipAddressInstance , many=True)
    return Response(serializer.data)


@api_view(["GET" , "POST"])
def addCustomerShippingAddress(request):

    data =  request.data
    userinstance  = User.objects.get(id=1)

    shipinstance = shippingAddress.objects.create(
        customer = userinstance,
        name = data['name'],
        phone_number = data['phone_number'],
        region = data['region'],
        city = data['city'],
        area = data['area'],
        address = data['adress'],
        email = data['email']

    )
    serializer = ShippingSerializer(shipinstance , many=False)
    return Response(serializer.data)


