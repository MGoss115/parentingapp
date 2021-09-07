from django.db import models

# Create your models here.
class Kid(models.Model):
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to="img/%y", null=True, verbose_name="", default='no pic')

    def __str__(self):
        return self.name


class Todo(models.Model):
    kid = models.ForeignKey(
        Kid,
        on_delete=models.CASCADE,
        related_name='todos'
    )
    chores = models.CharField(max_length=1000)
    homework = models.CharField(max_length=1000)
    recreational = models.CharField(max_length=1000)

    def __str__(self):
        return self.kid.name
    
