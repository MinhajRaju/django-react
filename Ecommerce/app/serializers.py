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
        fields = ['id','user', 'seller_id','title','brand' , 'count' , 'createdAt' , 'published' , 'qty' , 'mrp', 'stock' , 'service_delivery','shop_sku', 'category' ,'sub_category','sub_sub_category' , 'ratingandcomment']



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



class ProductStockSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Product_stock
        fields = '__all__'

class ServiceSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Service_Delivery
        fields = '__all__'

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







class PurchaseSerializer(serializers.ModelSerializer):

    product = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Product_Purchase
        fields = ['id' , 'quantity' , 'product']


    def get_product(self , obj):
        return AllProductSerializer(obj.product_id , many=False).data


class ColorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Color
        fields = '__all__'


class UserPrfileSerializer(serializers.ModelSerializer):


    user = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = Userprofile
        fields = ['phone', 'address' , 'user']

    def get_user(self  , obj):
        return UserSerializer(obj.user , many=False).data




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











class RatingAndCommentSerializer(serializers.ModelSerializer):

    customer  = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Rating_Comment
        fields = ['id' , 'customer','rating' , 'comment']


    def get_customer(self , obj):
        return UserPrfileSerializer(obj.customer  , many=False).data



class CustomerOrderDetailSerializer(serializers.ModelSerializer):


    product = serializers.SerializerMethodField(read_only=True)





    class Meta:
        model = Order_details
        fields = ['id','product' , 'retail_price' , 'qty' ,'order_date' , 'update_date']



    def get_product(self , obj):
        return   OrderProductDetailSerializer(obj.product_id , many=False).data



class OrderSerializerAll(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields  = '__all__'




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








