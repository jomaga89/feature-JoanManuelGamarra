from django.db import models

# Create your models here.
class Alumno(models.Model):
    nombre = models.CharField(max_length=255)
    fecha_nacimiento = models.DateField()
    nombre_padre = models.CharField(max_length=255)
    nombre_madre = models.CharField(max_length=255)
    grado = models.CharField(max_length=50)
    seccion = models.CharField(max_length=50)
    fecha_ingreso = models.DateField()

    def __str__(self):
        return self.nombre