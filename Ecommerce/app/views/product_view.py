from django.http import HttpResponse
from app.models import *
from app.serializer.product_serializer import *
from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from django.contrib.auth.models import User



@api_view(['GET'])
def productDetails(request):
    product = Product.objects.get(id=1)
    print(product)
    serializer = ProductDetailSerializer(product)
    return Response(serializer.data)



@api_view(['GET'])
def product_view(request):
    product = Product.objects.get(category=4)
    print(product)
    serializer = ProductDetailSerializer(product)
    return Response(serializer.data)



@api_view(['GET'])
def AllProduct(request):
    product = Product.objects.all()[0:6]
    serializer =  AllProductSerializer(product , many=True).data

    return Response(serializer)

@api_view(['GET'])
def DashboardProduct(request , *args , **kwargs):
    upper = kwargs.get('num_product')
    product = Product.objects.all()[0:upper]
    print(product)
    serializer =  DashboardProductSerializer(product , many=True).data
    return Response(serializer)





@api_view([ 'GET','POST'])
@permission_classes([IsAuthenticated])
def product_add(request):




    data = request.data
    user = request.user


    user = User.objects.get(id=request.user.id)

    cat = Category.objects.get(id=data['cat'])
    cat_depth_one = Category.objects.get(id=data['cat_depth_one'])
    cat_depth_two = Category.objects.get(id=data['cat_depth_two'])
    brand = Brand.objects.get(id=data['brand'])
    print(data['stock'])






    product = Product.objects.create(

        user =  user,
        title = data['title'],
        category = cat,
        sub_category = cat_depth_one,
        sub_sub_category = cat_depth_two,
        brand = brand

    )

    k = []

    for i in range(len(data['stock'])):

        print(data['stock'][i]['color'])

        k.append(int(data['stock'][i]['quantity']))




        Product_stock.objects.create(

            product_id = product,
            price = data['stock'][i]['price'],
            sku = data['stock'][i]['sellersku'],
            qty = data['stock'][i]['quantity']


        )
    r = sum(k)

    p = Product.objects.get(id=product.id)
    print(p)
    p.qty = r
    p.save()






    serializer = ProductDetailSerializer(product , many=False)
    return Response(serializer.data)















@api_view([ 'GET','POST'])
@permission_classes([IsAuthenticated])
def purchase_add(request):




    data = request.data
    user = request.user


    print(data)

    product = Product.objects.get(id=data['productId'])


    purchase = Product_Purchase.objects.create(

        product_id =  product,
        sourcing_price = data['sourcing_price'],
        quantity = data['quantity'],
        supplier = data['supplier'],
        warehouse = data['warehouse']

    )

    serializer = PurchaseSerializer(purchase , many=False)
    return Response(serializer.data)



@api_view(['GET'])
def AllPurchase(request):
    purchase = Product_Purchase.objects.all()
    serializer =  PurchaseSerializer(purchase , many=True).data

    return Response(serializer)


@api_view(['GET'])
def ColorData(request):
    purchase = Color.objects.all()
    serializer =  ColorSerializer(purchase , many=True).data

    return Response(serializer)


@api_view(['GET' , 'POST'])
def productPublish(request , pk):

    print(request.data)

    p = Product.objects.get(id=pk)
    if request.data['bool']== 'True':
        p.published = True
        p.save()
    elif request.data['bool']== 'False':
        p.published = False
        p.save()
    return Response({})

@api_view(['DELETE'])
def productDelete(request , pk):
    p  = Product.objects.get(id=pk)
    p.delete()

    print(pk)



    return Response({})


@api_view(['DELETE' , 'POST'])
def productDeleteMany(request):
    print(request)



    for i in request.data['idArray']:
        p  = Product.objects.get(id=i)
        p.delete()

    print("succssfully delete")


    return Response({})


import random

@api_view(['GET' , 'POST'])

def generateSku(request):

    for i in request.data['idArray']:

        product = Product.objects.get(id=i)
        if product.shop_sku == None:
            Product.objects.filter(id=i).update(shop_sku=str(product.id) + "_TTEC_ " + str(random.randint(1,10000)))



    return Response({})

@api_view(['GET' , 'POST'])
def stockUpdate(request):
    print(request.data)
    sign = request.data['sign']
    value = int(request.data['value'])
    print(sign , value)

    product = Product.objects.get(id=request.data['id'])

    val  = product.qty + value
    negative = product.qty - value
    print(val)

    if sign == '+':
        Product.objects.filter(id=request.data['id']).update(qty=val)
    if sign == '-':
        Product.objects.filter(id=request.data['id']).update(qty=negative)

    return Response({})















@api_view(['GET' , 'POST'])
def GetProductBySlug(request  , slug):
    print("ASDFASF" , slug)

    product = Product.objects.get(slug=slug)


    serializer = ProductDetailSerializer(product , many=False).data
    return Response(serializer)










@api_view(['GET' , 'POST'])
def RatingAndComment(request ):

    rating = Rating_Comment.objects.all()
    serializer = RatingAndCommentSerializer(rating  , many=True).data
    return Response(serializer)
















