import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, Curso, Leccion } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private http: HttpClient) {}

  // ==== USUARIOS ====
  listarUsuarios(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/usuarios`);
  }

  CrearUsuario(newUsuario: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  GetAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/usuarios`);
  }

  // Ahora devuelve un array de User[]
  GetUserById(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/usuarios/?username=${username}`);
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

  // ==== EXÁMENES ====
GetPreguntas(): Observable<any[]> {
  return this.http.get<any[]>(`${environment.apiUrl}/preguntas`);
}

GuardarResultado(username: string, puntaje: number): Observable<any> {
  return this.http.post(`${environment.apiUrl}/resultados`, {
    usuario: username,
    puntaje,
    fecha: new Date()
  });
}

}
