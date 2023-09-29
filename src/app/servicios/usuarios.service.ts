import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Usuario } from '../dtos/usuario-dto';
import { environment } from 'src/environment/environment';
import { UsuarioRegistrar } from '../dtos/usuario-registrar-dto';
import { Respuesta } from '../dtos/respuesta';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}

  registrar(usuario: UsuarioRegistrar): Observable<Respuesta> {
    const header = new HttpHeaders();
    // header.append('Content-Type', 'multipart/form-data');
    header.append('Content-Type', 'application/json');
    header.append('Accept', 'application/json');
    const options = ({ headers: header });
    return this.http.post<Respuesta>(environment.URL_BACK_COLEGIOS+'Usuario/Registrar', usuario, options);
  }

  escribirTipoDocumento(tipoDocumentoCode: string): string {
    let tipoDocumentoDescripcion!: string;
    switch(tipoDocumentoCode) {
      case '01':
        tipoDocumentoDescripcion = 'Cedula Ciudadania';
      break;
      case '02':
        tipoDocumentoDescripcion = 'Tarjeta Identidad';
    }
    return tipoDocumentoDescripcion;
  }

  escribirTipoUsuario(tipoUsuarioCode: string): string {
    let tipoUsuarioDescripcion!: string;
    switch(tipoUsuarioCode) {
      case '01':
        tipoUsuarioDescripcion = 'Estudiante';
      break;
      case '02':
        tipoUsuarioDescripcion = 'Profesor';
      break;
      case '03':
        tipoUsuarioDescripcion = 'Coordinador';
      break;
      case '04':
        tipoUsuarioDescripcion = 'Rector';
      break;
      case '05':
        tipoUsuarioDescripcion = 'Admin';
      break;
    }
    return tipoUsuarioDescripcion;
  }

  consultarTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(environment.URL_BACK_COLEGIOS+'Usuario/Todos');
  }
}
