
from django.http import HttpResponse
from app.serializer.user_serializer import *
from app.serializers import *
from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAdminUser  , IsAdminUser
from rest_framework import status
from django.contrib.auth.models import User





@api_view(['GET' , 'POST'])
def Seller(request ):

    rating = Seller_Profile.objects.all()
    serializer = SellerProfileSeriazlier(rating  , many=True).data
    return Response(serializer)



