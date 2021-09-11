from django.db import models

# Create your models here.
class Kid(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="img/%y", null=True, verbose_name="", blank=True)

    def __str__(self):
        return self.name


class Todo(models.Model):
    kid = models.ForeignKey(
        Kid,
        on_delete=models.CASCADE,
        related_name='todos'
    )
    chores = models.CharField(
        max_length=1000, null=True, verbose_name="", blank=True)
    homework = models.CharField(
        max_length=1000, null=True, verbose_name="", blank=True)
    recreational = models.CharField(
        max_length=1000, null=True, verbose_name="", blank=True)

 

    def __str__(self):
        return self.chores
  
