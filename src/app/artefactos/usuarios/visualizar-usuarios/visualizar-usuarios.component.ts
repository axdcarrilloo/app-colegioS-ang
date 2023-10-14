

import { Component, Input } from '@angular/core';

import { Usuario } from 'src/app/dtos/usuario-dto';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'visualizar-usuarios',
  templateUrl: './visualizar-usuarios.component.html',
  styleUrls: ['./visualizar-usuarios.component.scss']
})
export class VisualizarUsuariosComponent {

  @Input() usuarios: Usuario[] = [];

  constructor(private usuarioSvc: UsuariosService) {}

  ngOnInit(): void {
  }

  escribirTipoDocumento(tipoDocumentoCode: string): string {
    return this.usuarioSvc.escribirTipoDocumento(tipoDocumentoCode);
  }

  escribirTipoUsuario(tipoUsuarioCode: string): string {
    return this.usuarioSvc.escribirTipoUsuario(tipoUsuarioCode);
  }

}
