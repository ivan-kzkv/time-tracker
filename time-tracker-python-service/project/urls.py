from django.urls import path
from .views import (ProjectDestroyView, ProjectDetailView, ProjectUpdateView, ProjectListCreateView,
                    AllProjectsListView, TaskDestroyView, TaskDetailView, TaskUpdateView, TaskListCreateView,
                    AllTasksListView)

urlpatterns = [
    path('project/', ProjectListCreateView.as_view(), name='project-list-create'),
    path('project/<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
    path('project/all/', AllProjectsListView.as_view(), name='project-list'),
    path('project/delete/<int:pk>/', ProjectDestroyView.as_view(), name='project-delete'),
    path('project/update/<int:pk>/', ProjectUpdateView.as_view(), name='project-update'),
    path('task/', TaskListCreateView.as_view(), name='task-list-create'),
    path('task/<int:pk>/', TaskDetailView.as_view(), name='task-detail'),
    path('task/all/', AllTasksListView.as_view(), name='task-list'),
    path('task/delete/<int:pk>/', TaskDestroyView.as_view(), name='task-delete'),
    path('task/update/<int:pk>/', TaskUpdateView.as_view(), name='task-update')
]
