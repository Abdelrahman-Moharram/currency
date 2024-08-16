from django.db import models
import uuid

class BaseModel(models.Model):
    id                  = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    is_deleted          = models.BooleanField(default=False)

    class Meta:
        abstract = True

    def soft_delete(self):
        self.is_deleted = True
        self.save()
    def restore(self):
        self.is_deleted = False
        self.save()

class BaseModelManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_deleted=False)
    
    def get_deleted(self):
        return super().get_queryset().filter(is_deleted=True)
    
    def get_all(self):
        return super().get_queryset().all()
