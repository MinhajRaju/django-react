from django.urls import path
from app.views import customer_view as views

urlpatterns = [
    path('register/customer/' , views.RegisterCustomer , name='register'),
    path('customerprofile/<str:pk>' , views.customerProfileDetails , name='register'),
    path('customershippingaddress/'  , views.customerShippingAddress, name="shipaddress"),
    path('addcustomershipaddress/' , views.addCustomerShippingAddress , name="addshipadress")



]