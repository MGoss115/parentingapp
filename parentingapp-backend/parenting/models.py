from django.db import models
from django.contrib.auth.models import User
from django.conf import settings

# Create your models here.

class Kid(models.Model):
    name = models.CharField(max_length=200, null=False,)
    image = models.ImageField(upload_to="img/%y", null=True, verbose_name="", blank=True)
    chores = models.CharField(
        max_length=1000, null=True, verbose_name="", blank=True)
    homework = models.CharField(
        max_length=1000, null=True, verbose_name="", blank=True)
    recreational = models.CharField(
        max_length=1000, null=True, verbose_name="", blank=True)
  
  

    def __str__(self):
        return self.name

       
