from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from . import models
from . import serializers


class ListTodo(generics.ListCreateAPIView):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer


@csrf_exempt
@api_view(['GET', 'POST', ])
def handle_form(request):
    queryset = models.Todo.objects.all()
    if request.method == 'GET':
        serializer = serializers.TodoSerializer(queryset, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        data = JSONParser().parse(request)
        queryset.delete()
        dataset=data["data_get"]
        if dataset:
            1==1
        else:
            return Response(status=status.HTTP_201_CREATED)
        isSuccess=False
        for i in dataset:
            serializer = serializers.TodoSerializer(data=i)
            if serializer.is_valid():
                serializer.save()
                isSuccess=True
            else:
                isSuccess=False
        if(isSuccess):
            return Response(status=status.HTTP_201_CREATED)
        else:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class DetailTodo(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Todo.objects.all()
    serializer_class = serializers.TodoSerializer


# def home(request):
#     List = map(str, range(100))
#     return render(request, 'home.html', {'List': List})
#

