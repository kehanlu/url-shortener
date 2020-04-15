from django.urls import path
from url import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', views.index),
    path('api/', views.URLView.as_view()),
    path('<str:short_code>', views.url_redirect),
]
