import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environment/environment';
import { Respuesta } from '../dtos/respuesta';
import { AsignaturaRegistrarDto } from '../dtos/asignatura-registrar-dto';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor(private http: HttpClient) { }

  consultarPorNombre(nombre: string): Observable<Respuesta> {
    return this.http.get<Respuesta>(environment.URL_BACK_COLEGIOS+'Materia/ConsultarPorNombre/'+nombre);
  }

  consultarTodos(): Observable<Respuesta> {
    return this.http.get<Respuesta>(environment.URL_BACK_COLEGIOS+'Materia/Todas');
  }

  registrar(asignatura: AsignaturaRegistrarDto): Observable<Respuesta> {
    const header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<Respuesta>(environment.URL_BACK_COLEGIOS+'Materia/Registrar', asignatura, options);
  }
}
