# Generated by Django 3.2.7 on 2021-09-05 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('parenting', '0009_auto_20210905_2252'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='todo',
            name='image',
        ),
        migrations.AddField(
            model_name='kid',
            name='image',
            field=models.ImageField(default='no pic', null=True, upload_to='img/%y', verbose_name=''),
        ),
    ]
