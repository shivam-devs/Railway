from django.urls import path
from . import views

urlpatterns = [
    path('login/',views.Login,name='user'),
    path('register/',views.Register,name='user'),
]