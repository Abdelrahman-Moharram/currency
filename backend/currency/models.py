from django.db import models
from project.models import *


class Category (BaseModel):
    ar_name             = models.CharField(max_length=255)
    en_name             = models.CharField(max_length=255)
    icon                = models.FileField(upload_to=None, max_length=100)
    
    def __str__(self):
        return self.ar_name + " - " + self.en_name


class Item(BaseModel):
    ar_name             = models.CharField(max_length=255)
    en_name             = models.CharField(max_length=255)
    icon                = models.FileField(upload_to=None, max_length=100)
    category            = models.ForeignKey(Category, null=True, on_delete=models.SET_NULL)
    
    def __str__(self):
        return self.ar_name + " - " + self.en_name

