from django.contrib import admin
from .models import *

# Register your models here.



class ItemVariationAdmin(admin.ModelAdmin):
    list_display = [
        'attribute_id',
        'value',
        'attachment'
    ]


    search_fields = ['value']
class ItemVariationInLineAdmin(admin.TabularInline):
    model = Variation
    extra = 1

class VariationAdmin(admin.ModelAdmin):
    list_display= ['product_id' , 'name']
    list_filter = ['product_id']
    search_fields = ['name']
    inlines   = [ItemVariationInLineAdmin]



admin.site.register(Product)
admin.site.register(Attribute ,VariationAdmin)
admin.site.register(Variation  , ItemVariationAdmin)
admin.site.register(Product_Purchase)
admin.site.register(Order_details)
admin.site.register(Order)
admin.site.register(shippingAddress)

admin.site.register(Category)
admin.site.register(Brand)
admin.site.register(Color)

admin.site.register(Product_stock)

admin.site.register(Service_Delivery)
admin.site.register(Userprofile)

admin.site.register(Rating_Comment)
admin.site.register(Seller_Profile)







