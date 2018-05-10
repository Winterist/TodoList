# todos/serializers.py
from rest_framework import serializers
from . import models


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'task',
            'description',
            'complete',
        )
        model = models.Todo