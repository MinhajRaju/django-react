from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from app.models import *

from app.serializer.category_serializer import *
from app.serializer.user_serializer import *
from app.serializer.ran_serializer import *



class ProductStockSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Product_stock
        fields = '__all__'

class ServiceSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Service_Delivery
        fields = '__all__'






class ProductDetailSerializer(serializers.ModelSerializer):
    brand = serializers.SerializerMethodField(read_only=True)
    count = serializers.SerializerMethodField(read_only=True)
    published = serializers.SerializerMethodField(read_only=True)
    qty = serializers.SerializerMethodField(read_only=True)
    stock = serializers.SerializerMethodField(read_only=True)
    service_delivery = serializers.SerializerMethodField(read_only=True)
    category = serializers.SerializerMethodField(read_only=True)
    sub_category = serializers.SerializerMethodField(read_only=True)
    sub_sub_category = serializers.SerializerMethodField(read_only=True)
    ratingandcomment = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)



    class Meta:
        model = Product
        fields = ['id','user', 'seller_id','title','brand' , 'count' , 'createdAt' , 'published' , 'qty' , 'mrp', 'stock','slug' , 'service_delivery','shop_sku', 'category' ,'sub_category','sub_sub_category' , 'ratingandcomment']



    def get_user(self , obj):
        return UserSerializer(obj.user  , many=False).data

    def get_brand(self , obj):
        return BrandSerializer(obj.brand , many=False).data
    def get_count(self , obj):
        allproduct = Product.objects.all()
        return len(allproduct)
    def get_published(self , obj):
        return  str(obj.published)
    def get_qty(self , obj):
        return obj.qty

    def get_stock(self, obj):
        product_stock = obj.product_stock_set.all()
        print(product_stock)
        serializer = ProductStockSerialzer(product_stock, many=True)
        return serializer.data
    def get_service_delivery(self , obj):
        service = obj.service_delivery_set.all()
        serializer  = ServiceSerialzer(service  , many=True)
        return serializer.data

    def get_category(self , obj):
        return CategorySerializer(obj.category , many=False).data


    def get_sub_category(self , obj):
        return CategorySerializer(obj.sub_category , many=False).data

    def get_sub_sub_category(self , obj):
        return CategorySerializer(obj.sub_sub_category , many=False).data


    def get_ratingandcomment(self , obj):
        return RatingAndCommentSerializer(obj.rating_comment_set.all() , many=True).data



class AllProductSerializer(serializers.ModelSerializer):
    brand = serializers.SerializerMethodField(read_only=True)
    count = serializers.SerializerMethodField(read_only=True)
    published = serializers.SerializerMethodField(read_only=True)
    qty = serializers.SerializerMethodField(read_only=True)
    stock = serializers.SerializerMethodField(read_only=True)
    service_delivery = serializers.SerializerMethodField(read_only=True)
    ratingandcomment = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)


    class Meta:
        model = Product
        fields = ['id', 'user','seller_id' ,'title','brand' , 'count' ,'slug', 'mrp','createdAt' , 'published' , 'qty' , 'stock' , 'service_delivery','shop_sku', 'category' ,'sub_category','sub_sub_category' ,'ratingandcomment']



    def get_user(self , obj):
        return UserSerializer(obj.user  , many=False).data

    def get_brand(self , obj):
        return BrandSerializer(obj.brand , many=False).data
    def get_count(self , obj):
        allproduct = Product.objects.all()
        return len(allproduct)
    def get_published(self , obj):
        return  str(obj.published)
    def get_qty(self , obj):
        return obj.qty

    def get_stock(self, obj):
        product_stock = obj.product_stock_set.all()
        print(product_stock)
        serializer = ProductStockSerialzer(product_stock, many=True)
        return serializer.data
    def get_service_delivery(self , obj):
        service = obj.service_delivery_set.all()
        serializer  = ServiceSerialzer(service  , many=True)
        return serializer.data


    def get_ratingandcomment(self , obj):
        return RatingAndCommentSerializer(obj.rating_comment_set.all() , many=True).data



class DashboardProductSerializer(serializers.ModelSerializer):
    brand = serializers.SerializerMethodField(read_only=True)
    count = serializers.SerializerMethodField(read_only=True)
    published = serializers.SerializerMethodField(read_only=True)
    qty = serializers.SerializerMethodField(read_only=True)
    stock = serializers.SerializerMethodField(read_only=True)
    service_delivery = serializers.SerializerMethodField(read_only=True)
    ratingandcomment = serializers.SerializerMethodField(read_only=True)
    user = serializers.SerializerMethodField(read_only=True)


    class Meta:
        model = Product
        fields = ['id', 'user','seller_id' ,'title','brand' , 'count' , 'slug','mrp','createdAt' , 'published' , 'qty' , 'stock' , 'service_delivery','shop_sku', 'category' ,'sub_category','sub_sub_category' ,'ratingandcomment']



    def get_user(self , obj):
        return UserSerializer(obj.user  , many=False).data

    def get_brand(self , obj):
        return BrandSerializer(obj.brand , many=False).data
    def get_count(self , obj):
        allproduct = Product.objects.all()
        return len(allproduct)
    def get_published(self , obj):
        return  str(obj.published)
    def get_qty(self , obj):
        return obj.qty

    def get_stock(self, obj):
        product_stock = obj.product_stock_set.all()
        print(product_stock)
        serializer = ProductStockSerialzer(product_stock, many=True)
        return serializer.data
    def get_service_delivery(self , obj):
        service = obj.service_delivery_set.all()
        serializer  = ServiceSerialzer(service  , many=True)
        return serializer.data


    def get_ratingandcomment(self , obj):
        return RatingAndCommentSerializer(obj.rating_comment_set.all() , many=True).data



class PurchaseSerializer(serializers.ModelSerializer):

    product = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product_Purchase
        fields = ['id' , 'quantity' , 'product']


    def get_product(self , obj):
        return AllProductSerializer(obj.product_id , many=False).data






class ProductStockSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Product_stock
        fields = '__all__'



class VariationSerializer(serializers.ModelSerializer):
     class Meta:
        model = Variation
        fields = ['id' ,  'value' , 'attachment']





class AttributeSerializer(serializers.ModelSerializer):

    variation = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Attribute
        fields = ['id' , 'name' , 'variation']


    def get_variation(self , obj):
        return VariationSerializer(obj.variation_set.all() , many=True).data