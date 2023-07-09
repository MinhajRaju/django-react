from django.urls import path
from app.views import product_view as views
urlpatterns = [


    path('product/' ,views.productDetails , name="product"),
    path('product_view/' ,views.product_view , name="product"),

    path('product/add/' , views.product_add , name="add_product"),
    path('product/all/' , views.AllProduct , name="all_product"),
    path('dashproduct/<int:num_product>/' , views.DashboardProduct , name="all_product"),
    path('purchase/add/' , views.purchase_add , name="all_product"),
    path('product/<str:slug>/' , views.GetProductBySlug , name="all_product"),
    path('purchase/all/' , views.AllPurchase , name="all_product"),
    path('color/all/' , views.ColorData , name="all_product"),
    path('publish/<str:pk>/' , views.productPublish , name="all_product"),
    path('delete/<str:pk>/' , views.productDelete , name="all_product"),
    path('deletemany/' , views.productDeleteMany , name="all_product"),
    path('generatesku/' , views.generateSku , name="all_product"),
    path('stockupdate/' , views.stockUpdate , name="all_product"),
    path('ratingandcomment/' , views.RatingAndComment , name="all_product"),








]