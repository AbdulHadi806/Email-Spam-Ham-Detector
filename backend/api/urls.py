from .views import make_prediction, create_mail, get_created_mails
from django.urls import path

urlpatterns = [
    path('predict/', make_prediction, name='make-prediction'),
    path('mail/', create_mail, name='create_mail'),
    path('mail/list/', get_created_mails, name='get_created_mails'),
]