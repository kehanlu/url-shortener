import base64
import hashlib
from django.conf import settings
from rest_framework import serializers
from url.models import URL, Visitor
import requests
from bs4 import BeautifulSoup


def shorten_url(id):
    return base64.b64encode(
        hashlib.md5((str(id) + settings.HASH_SALT).encode('utf-8')).digest(), altchars=b"-_").decode("utf-8")


class URLSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ['id', 'url', 'short_code', 'create_on', 'title']
        lookup_field = 'short_code'

    def create(self, validate_data):
        url = validate_data.get('url')
        user = validate_data.get('user')
        title = BeautifulSoup(requests.get(url).text,
                              "html.parser").find("title").text

        if url:
            u = URL.objects.create(url=url, title=title, user=user)

            code_length = 4
            while URL.objects.filter(short_code=shorten_url(u.id)[:code_length]).exists():
                code_length += 1
            short_code = shorten_url(u.id)[:code_length]

            u.short_code = short_code
            u.save()
            return u
        else:
            raise ValueError('Unkown URL')
