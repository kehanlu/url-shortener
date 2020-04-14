from django.db import models
from django.contrib.auth.models import User


class URL(models.Model):
    url = models.CharField(max_length=200)
    short_code = models.CharField(max_length=20, blank=True)
    create_on = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='urls')


class Visitor(models.Model):
    ip = models.CharField(max_length=100)
    url = models.ForeignKey(
        URL, on_delete=models.CASCADE, related_name='visitor')
    create_on = models.DateTimeField(auto_now_add=True)
