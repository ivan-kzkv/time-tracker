from django.db import models


# Create your models here.
class Project(models.Model):
    name = models.CharField(max_length=64)
    date_created = models.DateTimeField()

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=64)
    time = models.IntegerField()
    date_created = models.DateTimeField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='tasks')

    class Meta:
        ordering = ['date_created']

    def __str__(self):
        return self.name
