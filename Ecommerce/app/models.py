from django.db import models

from django.contrib.auth.models import User
from django.contrib.postgres.fields import ArrayField
# Create your models here.


from django_extensions.db.fields import AutoSlugField
from treebeard.mp_tree import MP_Node
from django.db.models.signals import pre_save , post_save


from mptt.models import MPTTModel, TreeForeignKey




class Userprofile(models.Model):
    user = models.OneToOneField(User , on_delete=models.CASCADE)
    phone = models.IntegerField(null=True , blank=True)
    address = models.CharField(max_length=500 , null=True)





class Seller_Profile(models.Model):
    user = models.ForeignKey(User , on_delete=models.CASCADE , null=True , blank=True)
    account_type = models.CharField(max_length=200 , null=True , blank=True)
    adminaccess = models.CharField(max_length =200 , blank=True, null=True)

    active = models.IntegerField(default=0 , null=True , blank=True)

    def __str__(self):
        return self.account_type





class Category(MPTTModel):
    name = models.CharField(max_length=50, unique=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children')

    class MPTTMeta:
        order_insertion_by = ['name']


    def __str__(self):
        return self.name


class Brand(models.Model):
    category = models.ForeignKey(Category , null=True , blank=True , on_delete=models.CASCADE)
    name = models.CharField(max_length=200 , null=True)
    logo = models.ImageField(upload_to='brand_image/' , blank=True)




    def __str__(self):
        return self.name














class Product(models.Model):
    user = models.ForeignKey(User , null=True , blank=True , on_delete=models.CASCADE)
    category = models.ForeignKey(Category  , null=True , blank=True , on_delete=models.CASCADE  , related_name='Child')
    sub_category = models.ForeignKey(Category  , null=True , blank=True , on_delete=models.CASCADE , related_name='child1')
    sub_sub_category = models.ForeignKey(Category  , null=True , blank=True , on_delete=models.CASCADE , related_name='child2')
    sub_sub_sub_category = models.ForeignKey(Category  , null=True , blank=True , on_delete=models.CASCADE , related_name='child3')
    brand = models.ForeignKey(Brand , null=True , blank=True , on_delete=models.CASCADE)
    seller_id = models.IntegerField(default=0 ,null=True , blank=True)
    title = models.CharField(max_length=200 ,unique=True)
    slug = models.SlugField(max_length=250 , null=True , blank=True)
    product_image = models.ImageField(upload_to='product_image/' , blank=True)
    product_thumbnail = models.ImageField(upload_to='thumbnail_image/' , blank=True)
    mrp = models.IntegerField(default=0)
    selling_price = models.IntegerField(default=0)
    trade_price = models.IntegerField(default=0)
    todays_deal = models.BooleanField(default=0)
    rating = models.IntegerField(default=0)
    qty  = models.IntegerField(default=0)


    published = models.BooleanField(default=0)
    featured = models.BooleanField(default=0)
    current_stock = models.IntegerField(default=0)
    shop_sku = models.CharField(max_length=200 , null=True , blank=True)

    createdAt = models.DateField(auto_now_add=True , blank=True , null=True)


    def __str__(self):
        return self.title

class Product_stock(models.Model):
    product_id = models.ForeignKey(Product , on_delete=models.CASCADE)
    price = models.IntegerField(null=True)
    sku = models.CharField(max_length=200)
    qty = models.IntegerField(null=True)
    createdAt = models.DateField(auto_now_add=True , blank=True , null=True)

class Service_Delivery(models.Model):
    product_id = models.ForeignKey(Product , on_delete=models.CASCADE)
    warrenty = models.CharField(max_length=200 , null=True , blank=True)
    warrenty_time = models.CharField(max_length=200 , null=True , blank=True)
    pak_weight = models.IntegerField(default=0)
    pak_length = models.IntegerField(default=0)
    pak_width = models.IntegerField(default=0)
    pak_height  = models.IntegerField(default=0)


    def __str__(self):
        return self.warrenty


from app.utils import unique_slug_geneator

def slug_generator(sender , instance , *args , **kwargs ):

    if not instance.slug or instance.slug :
        instance.slug = unique_slug_geneator(instance)





pre_save.connect(slug_generator, sender=Product)



class Rating_Comment(models.Model):
    product_id  = models.ForeignKey(Product , on_delete=models.CASCADE)
    customer  = models.ForeignKey(Userprofile , on_delete=models.CASCADE , null=True , blank=True)
    rating = models.CharField(max_length=200 , null=True , blank=True)
    comment = models.CharField(max_length=200 , null=True , blank=True)


    def __str__(self):
        return self.rating





class Attribute(models.Model):
    product_id  = models.ForeignKey(Product , on_delete=models.CASCADE)
    name = models.CharField(max_length=50) #size or color

    class Meta:
        unique_together = (
            ('product_id', 'name')
        )


    def __str__(self):
        return self.name

class Variation(models.Model):
    attribute_id = models.ForeignKey(Attribute, on_delete=models.CASCADE)
    value = models.CharField(max_length=50) #s , m , l
    attachment = models.ImageField(upload_to='variation_product_image/' , blank=True)

    class Meta:
        unique_together = (
            ('attribute_id', 'value')
        )

    def __str__(self):
        return self.value

class Product_Purchase(models.Model):
    product_id =  models.ForeignKey(Product ,  on_delete=models.CASCADE)
    sourcing_price = models.CharField(max_length=500)
    quantity = models.IntegerField(null=True)
    supplier = models.CharField(max_length=200 , null=True)
    warehouse = models.CharField(max_length=200 , null=True)
    createdAt = models.DateField(auto_now_add=True , blank=True , null=True)


    def __str__(self):
        return self.sourcing_price


class shippingAddress(models.Model):

    customer =  models.ForeignKey(User , null=True , blank=True , on_delete=models.CASCADE)
    name = models.CharField(max_length=100 , null=True , blank=True)
    phone_number = models.CharField(max_length=100 , null=True, blank=True)
    region = models.CharField(max_length=100 , null=True, blank=True)
    city = models.CharField(max_length=100 , null=True, blank=True)
    area = models.CharField(max_length=100 , null=True, blank=True)
    address = models.CharField(max_length=100 , null=True, blank=True)
    email = models.CharField(max_length=100 , null=True , blank=True)

    def __str__(self):
        return self.name


from django.contrib.postgres.fields import ArrayField
import random



def order_no_generate():
    return "007"  + str(random.randint(1,50000000))





class Order(models.Model):
    customer  = models.ForeignKey(Userprofile , on_delete=models.CASCADE , null=True , blank=True)
    shipping_address_id = models.ForeignKey(shippingAddress , on_delete=models.CASCADE , null=True , blank=True)
    associated_seller  =  models.ForeignKey(User , null=True , blank=True , on_delete=models.CASCADE)
    order_no = models.CharField(max_length = 200 , default=order_no_generate , null=True , blank=True , unique=True)
    status = models.CharField(max_length=200 , null=True , blank=True)
    payment_type = models.CharField(max_length=200 , null=True , blank=True)
    payment_status = models.CharField(max_length=150 , null=True , blank=True)
    grand_total = models.CharField(max_length=150 , null=True , blank=True)
    total_qty = models.CharField(max_length=150 , null=True , blank=True)
    order_date = models.DateTimeField(auto_now_add=True , blank=True , null=True)
    update_date = models.DateTimeField(auto_now=True, blank=True , null=True)


    def __str__(self):
        return self.payment_status














class Order_details(models.Model):
    product_id =  models.ForeignKey(Product ,  on_delete=models.CASCADE)

    order_id  = models.ForeignKey(Order , on_delete=models.CASCADE , null=True , blank=True)
    seller_id = models.ForeignKey(User , on_delete=models.CASCADE , null=True , blank=True)
    order_date = models.DateTimeField(auto_now_add=True , blank=True , null=True)
    update_date = models.DateTimeField(auto_now=True, blank=True , null=True)
    retail_price = models.IntegerField(null=True , blank=True)
    qty = models.IntegerField(null=True  , blank=True)



    def __str__(self):
        return self.product_id.title




class Color(models.Model):
    name = models.CharField(max_length=200)
    def __str__(self):
        return self.name



















