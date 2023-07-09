from django.http import HttpResponse
from app.models import *
from app.serializer.category_serializer import *
from app.serializer.ran_serializer import *


from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated , IsAdminUser
from rest_framework import status
from django.contrib.auth.models import User



@api_view(['GET'])
def categoryView(request):
    c = Category.objects.all()
    serializer = CategorySerializer(c , many=True).data
    return Response(serializer)


@api_view(['GET'])
def categoryNestedView(request):
    c = Category.objects.all()
    serializer = CategoryNestedSerializer(c , many=True).data
    return Response(serializer)


@api_view(['GET'])
def categoryViewById(request , pk):
    c = Category.objects.filter(parent=pk)
    serializer = CategorySerializer(c , many=True).data
    return Response(serializer)


@api_view(['GET' , 'POST'])
def Cat_depth_one(request ):
    category = Category.objects.filter(level=1).filter(parent=request.data['id'])
    print(category)
    serializer = CategoryNestedSerializer(category , many=True).data
    return Response(serializer)


@api_view(['GET' , 'POST'])
def Cat_depth_two(request ):
    category = Category.objects.filter(level=2).filter(parent=request.data['id'])
    print(category)
    serializer = CategoryNestedSerializer(category , many=True).data
    return Response(serializer)



@api_view(['GET'])
def BrandView(request , pk):
    c = Brand.objects.filter(category=pk)
    serializer = BrandSerializer(c , many=True).data
    return Response(serializer)





