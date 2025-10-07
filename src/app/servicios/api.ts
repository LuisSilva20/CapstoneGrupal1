import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, Users, Curso, Leccion } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  // ==== USUARIOS ====
  listarUsuarios(): Observable<Users> {
    return this.http.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  CrearUsuario(newUsuario: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  GetAllUsers(): Observable<Users> {
    return this.http.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  GetUserById(username: string): Observable<Users> {
    return this.http.get<Users>(`${environment.apiUrl}/usuarios/?username=${username}`);
  }

  IsLogged(): boolean {
    return sessionStorage.getItem('username') != null;
  }

  // ==== CURSOS Y LECCIONES ====
  GetAllCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.apiUrl}/cursos`);
  }

  GetCursosByUsuario(username: string): Observable<Curso[]> {
    return this.http.get<Curso[]>(`${environment.apiUrl}/cursos?usuario=${username}`);
  }

  GetLeccionesByCurso(cursoId: number): Observable<Leccion[]> {
    return this.http.get<Leccion[]>(`${environment.apiUrl}/lecciones?cursoId=${cursoId}`);
  }

  CrearCurso(newCurso: Curso): Observable<Curso> {
    return this.http.post<Curso>(`${environment.apiUrl}/cursos`, newCurso);
  }

  CrearLeccion(newLeccion: Leccion): Observable<Leccion> {
    return this.http.post<Leccion>(`${environment.apiUrl}/lecciones`, newLeccion);
  }
}
