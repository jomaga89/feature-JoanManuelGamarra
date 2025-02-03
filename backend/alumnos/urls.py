from django.urls import path
from .views import CrearAlumnoView, ConsultarAlumnoPorGradoView

urlpatterns = [
    path('crear-alumno', CrearAlumnoView.as_view()),
    path('consultar-alumno/<str:idGrado>', ConsultarAlumnoPorGradoView.as_view()),
]