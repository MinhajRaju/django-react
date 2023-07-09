from django.urls import path
from app.views import seller_view as views





urlpatterns = [



    path('seller/' , views.Seller , name="all_product"),



]