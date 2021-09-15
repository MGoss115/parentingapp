from django.db.models.query import QuerySet
from rest_framework import serializers
from rest_framework_jwt.settings import api_settings
from django.contrib.auth.models import User
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


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ('username','kids')


class UserSerializerWithToken(serializers.ModelSerializer):

    token = serializers.SerializerMethodField()
    password = serializers.CharField(write_only=True)

    def get_token(self, obj):
        jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
        jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER

        payload = jwt_payload_handler(obj)
        token = jwt_encode_handler(payload)
        return token

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance

    class Meta:
        model = User
        fields = ('token', 'username', 'password')
