from rest_framework import serializers
from .models import Task, Project


class ProjectSerializer(serializers.ModelSerializer):
    tasks = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


class TasksSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = '__all__'


