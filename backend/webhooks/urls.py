from django.urls import path
from .views import webhook_view

urlpatterns = [
    path('webhook/', webhook_view, name='webhook'),
]
