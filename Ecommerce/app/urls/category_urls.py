from django.urls import path
from app.views import category_view as views


urlpatterns = [

    path('' ,views.categoryView , name="product"),
    path('categorynested/' ,views.categoryNestedView , name="product"),
    path('category/<str:pk>/' ,views.categoryViewById , name="product"),
    path('catdepthone/' , views.Cat_depth_one , name="all_product"),
    path('catdepthtwo/' , views.Cat_depth_two , name="all_product"),
    path('brand/<str:pk>/' ,views.BrandView , name="product"),




]



