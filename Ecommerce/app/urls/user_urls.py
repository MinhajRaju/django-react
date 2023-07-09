from django.urls import path
from app.views import user_view as views


urlpatterns = [


    path('login/' , views.MyTokenObtainPairView.as_view()  , name = 'token_obtain_pair'),
    path('register/' , views.RegisterUser , name='register'),















]