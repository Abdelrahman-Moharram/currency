from django.db import models
from django.contrib.auth.models import (
    BaseUserManager,
    AbstractBaseUser,
    PermissionsMixin
)
import uuid
from project.models import *


class UserAccountManager(BaseUserManager):
    def create_user(self, email, password=None, **kwargs):
        if not email:
            raise ValueError('Users must have an email address')

        email = self.normalize_email(email)
        email = email.lower()

        user = self.model(
            email=email,
            **kwargs
        )
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **kwargs):
        user = self.create_user(
            email,
            password=password,
            **kwargs
        )

        user.role  = Role.objects.filter(name='Admin').first()
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)

        return user

class Role(BaseModel):
    id                  = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name                = models.CharField(max_length=255)
    objects = BaseModelManager()


    def __str__(self) -> str:
        return self.name

class User(AbstractBaseUser, PermissionsMixin):
    id                  = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username            = models.CharField(max_length=255)
    email               = models.EmailField(unique=True, max_length=255)
    is_active           = models.BooleanField(default=True)
    is_staff            = models.BooleanField(default=False)
    is_superuser        = models.BooleanField(default=False)
    role                = models.ForeignKey(Role, on_delete=models.DO_NOTHING, null=True, blank=True)
    
    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username',]

    def __str__(self):
        return self.email
    


