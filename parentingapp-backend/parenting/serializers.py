from rest_framework import serializers
from .models import Kid, Todo


class KidSerializer(serializers.HyperlinkedModelSerializer):
    todos = serializers.HyperlinkedRelatedField(
        view_name='todo_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model = Kid
        fields = ('id', 'name',  'image', 'todos')


class TodoSerializer(serializers.HyperlinkedModelSerializer):
    kid = serializers.HyperlinkedRelatedField(
        view_name='kid_detail',
        read_only=True
    )
    kid_id = serializers.PrimaryKeyRelatedField(
        queryset = Kid.objects.all(),
        source = 'kid'
    )

    class Meta:
        model = Todo
        fields = ('id', 'kid','kid_id','chores', 'homework', 'recreational')
