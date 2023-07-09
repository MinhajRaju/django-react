from django.http import HttpResponse
from app.models import *
from app.serializer.order_serializer import *
from rest_framework.response import Response
from rest_framework.decorators import api_view , permission_classes
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework import status
from django.contrib.auth.models import User





@api_view(['GET'])
def Allorder(request):
    order = Order.objects.all()
    serializer = OrderSerializer(order , many=True).data
    return Response(serializer)


@api_view(['GET'])
def PendingOrder(request):
    order = Order.objects.filter(status="pending")
    serializer = OrderSerializer(order , many=True).data
    return Response(serializer)

@api_view(['GET'])
def RtsOrder(request):
    order = Order.objects.filter(status="rts")
    serializer = OrderSerializer(order , many=True).data
    return Response(serializer)

@api_view(['GET'])
def CancelledOrder(request):
    order = Order.objects.filter(status="cancelled")
    serializer = OrderSerializer(order , many=True).data
    return Response(serializer)


@api_view(['GET' , 'POST'])
def orderDetails(request ):
    order_details = Order_details.objects.all()
    print(order_details)
    serializer = OrderDetailSerializer(order_details  , many=True).data
    return Response(serializer)


@api_view(['GET' , 'POST'])
def orderItemSave(request ):

    print(request.data)
    cart = request.data['cartItems']
    shippingPrice = request.data['shippingPrice']
    total = request.data['total']
    payment_method = request.data['payment']['payment_method']
    payment_status = request.data['payment']['payment_status']
    shippingId = request.data['shippingid']
    totalqty  = request.data['totalqty']

    print(shippingId)

    shipping = shippingAddress.objects.get(id=shippingId)
    userprofile = Userprofile.objects.get(id=12)

    # (1) Create order
    seller_list = []
    for i in cart:
        seller_list.append(i['sellerId'])

    sortedArray = list(set(seller_list))

    print('sortedArray' , sortedArray)


    for i in sortedArray:

        user = User.objects.get(id=i)
        order = Order.objects.create(
        customer = userprofile,
        shipping_address_id = shipping,
        status="pending",
        associated_seller = user,
        payment_type=payment_method,
        payment_status=payment_status,

    )

        example = filter(lambda cart: cart['sellerId'] == i , cart)
        convertolist  =  list(example)
        total = []
        total_qty = []

        for k in convertolist:


            print('k' , k)

            product = Product.objects.get(id=k['product'])
            user_seller =  User.objects.get(id=k['sellerId'])



            item = Order_details.objects.create(
                product_id=product,
                order_id=order,
                qty=k['qty'],

                retail_price=k['mrp'],
                seller_id = user_seller
            )
            product.qty -= item.qty
            product.save()

            t = k['qty'] * k['mrp']
            total.append(t)
            total_qty.append(k['qty'])

        x  , z= sum(total) , sum(total_qty)
        order.grand_total = x
        order.total_qty = z
        order.save()

        total.clear()
        total_qty.clear()

        print(x ,z)
    return Response({})






@api_view(['GET' , 'POST'])
def ShippingAddress(request ):

    Shipping = shippingAddress.objects.filter(customer=request.data['id'])
    serializer = ShippingSerializer(Shipping  , many=True).data
    return Response(serializer)


@api_view(['GET' , 'POST'])
def Cancelled(request):
    order = Order.objects.filter(id=request.data['cid']).update(status="cancelled")
    return Response({})


from app.encryption_util import *


@api_view(['GET' , 'POST'])
def Invoice(request  , pk):
    decryptId = decrypt(pk)
    print(decryptId)
    rating = Order.objects.get(id=decryptId)
    serializer = InvoiceOrderSerializer(rating  , many=False).data
    return Response(serializer)



