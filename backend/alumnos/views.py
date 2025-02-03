from rest_framework import generics, permissions
from .models import Alumno
from .serializers import AlumnoSerializer
# Create your views here.

class CrearAlumnoView(generics.CreateAPIView):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer
    permission_classes = [permissions.IsAuthenticated]

class ConsultarAlumnoPorGradoView(generics.ListAPIView):
    serializer_class = AlumnoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        grado = self.kwargs['idGrado']
        return Alumno.objects.filter(grado=grado)

 


