# todos/urls.py
from django.conf.urls import  url

from . import views

urlpatterns = [
    url(r'^$', views.ListTodo.as_view()),
    url(r'^submit/$', views.handle_form),
    url(r'^(?P<pk>\d+)/$', views.DetailTodo.as_view()),
]