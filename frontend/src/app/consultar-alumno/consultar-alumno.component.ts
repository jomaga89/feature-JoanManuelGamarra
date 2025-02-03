import { Component } from '@angular/core';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-consultar-alumno',
  templateUrl: './consultar-alumno.component.html',
  styleUrls: ['./consultar-alumno.component.css']
})
export class ConsultarAlumnoComponent {
  grado: string = '';
  alumnos: any[] = [];

  constructor(private alumnoService: AlumnoService) { }

  consultarAlumnos() {
    this.alumnoService.consultarAlumnosPorGrado(this.grado).subscribe(
      (alumnos) => {
        this.alumnos = alumnos;
      },
      (error) => {
        console.error('Error al consultar alumnos:', error);
      }
    );
  }
}