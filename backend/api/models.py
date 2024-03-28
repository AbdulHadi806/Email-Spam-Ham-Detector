from email.policy import default
from django.db import models

# Create your models here.
class Mail(models.Model):
    subject = models.CharField(max_length=100)
    isHam = models.BooleanField(default=True)
    class Meta:
        app_label='api'
    def __str__(self):
        return self.subject