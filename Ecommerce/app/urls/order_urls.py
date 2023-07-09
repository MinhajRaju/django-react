from django.urls import path
from app.views import order_view as views


urlpatterns = [
    path('order/' , views.Allorder , name="all_product"),
    path('orderdetails/' , views.orderDetails , name="all_product"),
    path('pending/' , views.PendingOrder , name="all_product"),
    path('rts/' , views.RtsOrder , name="all_product"),
    path('cancelled/' , views.Cancelled , name="all_product"),
    path('allcancelled/' , views.CancelledOrder , name="all_product"),
    path('shipping/' , views.ShippingAddress , name="all_product"),
    path('ordeitemsaved/' , views.orderItemSave , name="all_product"),
    path('invoice/<str:pk>/' , views.Invoice , name="all_product"),




]

