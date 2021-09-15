import re
from django.db.models.query import QuerySet
from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponseRedirect
from django.contrib.auth.models import User
from rest_framework import generics, permissions, serializers, viewsets, status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Kid
from .forms import KidForm
from .serializers import KidSerializer, UserSerializer, UserSerializerWithToken


@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserList(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserSerializerWithToken(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Create your views here.

# class KidList(viewsets.ModelViewSet):
#     queryset=Kid.objects.all()
#     serializer_class = KidSerializer
#     permission_classes=[permissions.AllowAny]

#     def list(self, request):
#         kid=Kid.objects.all()
#         serializer=KidSerializer(kid, many=True)
#         return Response(serializer.data)


# class TodoList(viewsets.ModelViewSet):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer
#     permission_classes = [permissions.AllowAny]


class KidList(generics.ListCreateAPIView):
    queryset = Kid.objects.all()
    serializer_class = KidSerializer
    permission_classes = [permissions.AllowAny]





class KidDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Kid.objects.all()
    serializer_class = KidSerializer
    permission_classes = [permissions.AllowAny]

# class TodoList(generics.ListCreateAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer
#     permission_classes = [permissions.AllowAny]

# class TodoDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Todo.objects.all()
#     serializer_class = TodoSerializer  
#     permission_classes = [permissions.AllowAny]

   






# def kid_form(request):
#     if request.method == "POST":
#         form = KidForm(data=request.POST, files=request.FILES)
#         if form.is_valid():
#             form.save()
#             obj = form.instance
#             return render(request, "parenting/kid_form.html", {"obj": obj})
#     else:
#         form = TodoForm()
#     img = Todo.objects.all()

#     return render(request, "parenting/kid_form.html", {"img": img, "form": form})




 
