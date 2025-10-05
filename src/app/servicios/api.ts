import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, Users } from '../interfaces/interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class Api {
  constructor(private httpclient: HttpClient) {}

  listarUsuarios(): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  CrearUsuario(newUsuario: User): Observable<User> {
    return this.httpclient.post<User>(
      `${environment.apiUrl}/usuarios`,
      newUsuario
    );
  }

  GetAllUsers(): Observable<Users> {
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }

  GetUserById(codigo: any): Observable<Users> {
    return this.httpclient.get<Users>(
      `${environment.apiUrl}/usuarios/?username=${codigo}`
    );
  }

  IsLogged() {
    return sessionStorage.getItem('username') != null;
  }
}
