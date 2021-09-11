from django.urls import path
from . import views
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from .views import KidList, TodoList

router = DefaultRouter()
router.register(r'kids', KidList, basename='kid')
router.register(r'todos', TodoList, basename='todo')
urlpatterns = router.urls

# urlpatterns = [
    # path('todos/', views.TodoList.as_view(), name='todo_list'),
    # path('kids/', views.KidList.as_view(), name='kid_list'),
    # path('todos/<int:pk>', views.TodoDetail.as_view(), name='todo_detail'),
    # path('kids/<int:pk>', views.KidDetail.as_view(), name='kid_detail'),
    # path('', views.kid_form, name='kid_form'),
    # path('todos/<int:pk>', views.todo_detail, name='todo_detail'),
# ]
