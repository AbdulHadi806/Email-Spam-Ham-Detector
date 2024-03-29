from .views import create_mail, get_created_mails, retrain_model
from django.urls import path

urlpatterns = [
    path('mail/', create_mail, name='create_mail'),
    path('mail/list/', get_created_mails, name='get_created_mails'),
    path('model/retrain/', retrain_model, name='retrain_model'),
]