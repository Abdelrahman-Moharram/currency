from django.urls import path
from .views import *

app_name = 'currency'

urlpatterns = [
    path('', index, name='index'),
]