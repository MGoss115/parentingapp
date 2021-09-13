from django.db.models.query import QuerySet
from rest_framework import serializers
from .models import Kid


# class KidSerializer(serializers.HyperlinkedModelSerializer):
#     todos = serializers.StringRelatedField(
#         # view_name='todo_detail',
#         many=True,
#         read_only=True
#     )

#     kid_url = serializers.ModelSerializer.serializer_url_field(
#         view_name='todo_detail'
#     )

#     class Meta:
#         model = Kid
#         fields = ('id', 'name',  'image', 'todos', 'kid_url')


# class TodoSerializer(serializers.HyperlinkedModelSerializer):
#     kid = serializers.HyperlinkedRelatedField(
#         view_name='kid_detail',
#         read_only=True
#     )
#     kid_id = serializers.PrimaryKeyRelatedField(
#         queryset = Kid.objects.all(),
#         source = 'kid'
#     )

#     class Meta:
#         model = Todo
#         fields = ('id', 'kid','kid_id','chores', 'homework', 'recreational')
#     kid_id = serializers.PrimaryKeyRelatedField(
#                 queryset = Kid.objects.all(),
#                 source = 'kid'
#     )

# class TodoSerializer(serializers.ModelSerializer):
#     # kid = KidSerializer()
#     kid_id = serializers.PrimaryKeyRelatedField(
#         queryset = Kid.objects.all(),
#         source='kid'
#     )

#     class Meta:
#         model = Todo
#         fields = ('id','chores', 'homework', 'recreational', 'kid_id')


class KidSerializer(serializers.ModelSerializer):
    # todos = TodoSerializer(read_only=True, many=True)


    class Meta:
        model = Kid
        fields = ('id', 'name',  'image', 'chores', 'homework', 'recreational',)

        
    
  




        
