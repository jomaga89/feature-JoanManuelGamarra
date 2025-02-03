import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private apiUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) { }

  private getAuthHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': `Basic ${btoa('username:password')}`
    });
  }

  crearAlumno(alumno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crear-alumno`, alumno, { headers: this.getAuthHeaders() });
  }

  consultarAlumnosPorGrado(grado: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/consultar-alumno/${grado}`, { headers: this.getAuthHeaders() });
  }
}