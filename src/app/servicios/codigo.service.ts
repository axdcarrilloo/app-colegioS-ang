import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Respuesta } from '../dtos/respuesta';
import { environment } from 'src/environment/environment';
import { CodigoRegistrarDto } from '../dtos/codigo-registrar-dto';

@Injectable({
  providedIn: 'root'
})
export class CodigoService {

  constructor(private http: HttpClient) { }

  consultarTodos(): Observable<Respuesta> {
    return this.http.get<Respuesta>(environment.URL_BACK_COLEGIOS+'Codigo/Todos');
  }

  registrar(codigo: CodigoRegistrarDto): Observable<Respuesta> {  
    // console.log(codigo);
    const header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<Respuesta>(environment.URL_BACK_COLEGIOS+'Codigo/Registrar', codigo, options);
  }
}
