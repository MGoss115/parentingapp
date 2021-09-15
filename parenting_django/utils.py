from parenting.serializers import UserSerializer


def my_jwt_response_handler(token, username=None, request=None):
    return {
        'token': token,
        'username': UserSerializer(username, context={'request': request}).data
    }
