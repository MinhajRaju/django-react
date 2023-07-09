from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from app.models import *

from app.serializer.user_serializer import *








class OrderProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields  =['title' , 'product_image']
class OrderUserDetailSerializer(serializers.ModelSerializer):

    user = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Userprofile
        fields  = ['phone','address' , 'user']

    def get_user(self  , obj):
        return UserSerializer(obj.user , many=False).data










class OrderDetailSerializer(serializers.ModelSerializer):


    product = serializers.SerializerMethodField(read_only=True)
    order = serializers.SerializerMethodField(read_only=True)
    seller_id = serializers.SerializerMethodField(read_only=True)



    class Meta:
        model = Order_details
        fields = ['id','seller_id','product','order' , 'retail_price' , 'qty' ,'order_date' , 'update_date']



    def get_product(self , obj):
        return   OrderProductDetailSerializer(obj.product_id , many=False).data
    def get_order(self , obj):
        return   OrderSerializer(obj.order_id , many=False).data
    def get_seller_id(self , obj):
        return   UserSerializer(obj.seller_id , many=False).data



class ShippingSerializer(serializers.ModelSerializer):

    class Meta:
        model = shippingAddress
        fields = '__all__'

from app.encryption_util import *

class OrderSerializer(serializers.ModelSerializer):

    customer = serializers.SerializerMethodField(read_only=True)
    shipping = serializers.SerializerMethodField(read_only=True)
    associated_seller = serializers.SerializerMethodField(read_only=True)
    encryptId  =serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order
        fields  =['id', 'encryptId' ,'order_no','customer','associated_seller' ,'shipping', 'payment_type' , 'payment_status','status','grand_total','total_qty','order_date' , 'update_date']


    def get_associated_seller(self , obj):
        return UserSerializer(obj.associated_seller , many=False).data

    def get_customer(self , obj):
        return   OrderUserDetailSerializer(obj.customer , many=False).data
    def get_shipping(self , obj):
        return   ShippingSerializer(obj.shipping_address_id , many=False).data
    def get_encryptId(self , obj):
        return encrypt(obj.id)


class InvoiceOrderDetailSerializer(serializers.ModelSerializer):


    product = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Order_details
        fields = ['id','product' ,'retail_price'  , 'qty']


    def get_product(self , obj):
        return   OrderProductDetailSerializer(obj.product_id , many=False).data




class InvoiceOrderSerializer(serializers.ModelSerializer):

    product = serializers.SerializerMethodField(read_only=True)
    customer = serializers.SerializerMethodField(read_only=True)
    shipping = serializers.SerializerMethodField(read_only=True)
    associated_seller = serializers.SerializerMethodField(read_only=True)





    class Meta:
        model = Order
        fields  =['id'  ,'order_no' , 'product' ,'customer','associated_seller' ,'shipping','payment_type' , 'payment_status','status','grand_total','total_qty','order_date' , 'update_date']

    def get_product(self , obj):
        return InvoiceOrderDetailSerializer(obj.order_details_set.all()  , many=True).data
    def get_associated_seller(self , obj):
        return UserSerializer(obj.associated_seller , many=False).data

    def get_customer(self , obj):
        return   OrderUserDetailSerializer(obj.customer , many=False).data
    def get_shipping(self , obj):
        return   ShippingSerializer(obj.shipping_address_id , many=False).data








class OrderSerializerAll(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields  = '__all__'




class CustomerOrderDetailSerializer(serializers.ModelSerializer):


    product = serializers.SerializerMethodField(read_only=True)





    class Meta:
        model = Order_details
        fields = ['id','product' , 'retail_price' , 'qty' ,'order_date' , 'update_date']



    def get_product(self , obj):
        return   OrderProductDetailSerializer(obj.product_id , many=False).data



class getCutomerPorfileDetailSerializer(serializers.ModelSerializer):

    order = serializers.SerializerMethodField(read_only=True)
    userr = serializers.SerializerMethodField(read_only=True)
    shipping = serializers.SerializerMethodField(read_only=True)
    order_details = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id' , 'order' , 'userr' ,'shipping' , 'order_details']



    def get_order_details(self , obj):


        return CustomerOrderDetailSerializer(obj.order_details_set.all()  , many=True).data


    def get_userr(self , obj):
        print(obj.id)
        userporfile = Userprofile.objects.get(user=obj.id)
        print(userporfile)
        return UserPrfileSerializer(userporfile , many=False).data
    def get_order(self , obj):
        return   OrderSerializerAll(obj.order_set.all() , many=True).data

    def get_shipping(self , obj):
        return   ShippingSerializer(obj.shippingaddress_set.all() , many=True).data


















