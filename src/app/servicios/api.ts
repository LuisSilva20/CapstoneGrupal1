import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map, switchMap, throwError } from 'rxjs';
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

  /**
   * Crea un nuevo usuario con ID incremental.
   * Verifica también que no exista otro con el mismo username.
   */
  CrearUsuario(newUsuario: User): Observable<User> {
    return this.listarUsuarios().pipe(
      switchMap((usuarios: User[]) => {
        // Verificar si ya existe un username igual
        const existe = usuarios.some(
          (u) => u.username.toLowerCase() === newUsuario.username.toLowerCase()
        );
        if (existe) {
          return throwError(() => new Error('El nombre de usuario ya existe'));
        }

        // Calcular ID incremental
        const maxId =
          usuarios.length > 0
            ? Math.max(
                ...usuarios.map((u) =>
                  typeof u.id === 'string' ? parseInt(u.id) || 0 : (u.id as number)
                )
              )
            : 0;
        const nuevoId = maxId + 1;

        const usuarioFinal: User = {
          ...newUsuario,
          id: nuevoId,
          isactive: true,
        };

        // Enviar al servidor con ID correcto
        return this.http.post<User>(`${environment.apiUrl}/usuarios`, usuarioFinal);
      })
    );
  }

  GetAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/usuarios`);
  }

  /**
   * Busca un usuario por su nombre de usuario (username)
   */
  GetUserById(username: string): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/usuarios?username=${username}`);
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


  GetPreguntas(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/preguntas`);
  }

  GuardarResultado(username: string, puntaje: number): Observable<any> {
    return this.http.post(`${environment.apiUrl}/resultados`, {
      usuario: username,
      puntaje,
      fecha: new Date(),
    });
  }
}
