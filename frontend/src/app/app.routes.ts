import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAlumnoComponent } from './crear-alumno/crear-alumno.component';
import { ConsultarAlumnoComponent } from './consultar-alumno/consultar-alumno.component';

export const routes: Routes = [
  { path: 'crear-alumno', component: CrearAlumnoComponent },
  { path: 'consultar-alumno', component: ConsultarAlumnoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
