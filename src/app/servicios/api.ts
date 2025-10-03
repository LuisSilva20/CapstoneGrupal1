import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User, Users } from 'src/app/interfaces/interfaces'

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private httpclient: HttpClient) { }

  listarUsuarios():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`);
  }
  
  CrearUsuario(newUsuario: User): Observable<User>{
    return this.httpclient.post<User>(`${environment.apiUrl}/usuarios`, newUsuario);
  }

  GetAllUsers():Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios`)
  }
  
  GetUserById(codigo: any):Observable<Users>{
    return this.httpclient.get<Users>(`${environment.apiUrl}/usuarios/?username=${codigo}`);
  }

  IsLogged(){
    return sessionStorage.getItem('username')!=null;
  }

}
