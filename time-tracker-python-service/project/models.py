from django.db import models


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=64)
    date_created = models.DateTimeField()


class Task(models.Model):
    name = models.CharField(max_length=64)
    time = models.IntegerField()
    date_created = models.DateTimeField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
