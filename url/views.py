from django.core.validators import URLValidator
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import generics, status

from url.models import URL
from url.serializers import URLSerializer


def index(request):
    return render(request, 'index.html', {})


def url_redirect(request, short_code):
    if URL.objects.filter(short_code=short_code).exists():
        return redirect(URL.objects.get(short_code=short_code).url, permanent=True)
    else:
        return render(request, '404.html', {})


def url_is_valid(url):
    validate = URLValidator()
    try:
        validate(url)
        return True
    except:
        return False


class URLView(generics.ListCreateAPIView):
    serializer_class = URLSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return user.urls.all().order_by('-id')

    def post(self, request):
        url = request.data.get('url')
        if not url_is_valid(url):
            return Response({'msg': 'URL not valid.'}, status=status.HTTP_406_NOT_ACCEPTABLE)
        if url.startswith('https://to.hanklu.tw') or url.startswith('http://to.hanklu.tw'):
            return Response({'msg': 'URL is not allowed.'}, status=status.HTTP_406_NOT_ACCEPTABLE)

        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data)
        else:
            raise ValueError('Not serializable')
