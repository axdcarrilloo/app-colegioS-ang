import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Rolregistrar } from '../dtos/rol-registrar-dto';
import { environment } from 'src/environment/environment';
import { Respuesta } from '../dtos/respuesta';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  constructor(private http: HttpClient) { }

  eliminarPorId(id: number): Observable<Respuesta> {
    return this.http.delete<Respuesta>(environment.URL_BACK_COLEGIOS+'Rol/Eliminar/'+id);
  }

  consultarPorId(id: number): Observable<Respuesta> {
    return this.http.get<Respuesta>(environment.URL_BACK_COLEGIOS+'Rol/ConsultarPorId/'+id);
  }

  consultarTodos(): Observable<Respuesta> {
    return this.http.get<Respuesta>(environment.URL_BACK_COLEGIOS+'Rol/Todos');
  }

  registrar(rol: Rolregistrar): Observable<Respuesta> {  
    // console.log(rol);
    const header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<Respuesta>(environment.URL_BACK_COLEGIOS+'Rol/Registrar', rol, options);
  }
}
