import { Component } from '@angular/core';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent {
  alumno: any = {};

  constructor(private alumnoService: AlumnoService) { }

  crearAlumno() {
    this.alumnoService.crearAlumno(this.alumno).subscribe(
      (response) => {
        console.log('Alumno creado:', response);
        this.alumno = {};
      },
      (error) => {
        console.error('Error al crear alumno:', error);
      }
    );
  }
}
