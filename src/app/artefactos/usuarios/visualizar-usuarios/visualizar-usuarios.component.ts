
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/dtos/usuario-dto';


import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'visualizar-usuarios',
  templateUrl: './visualizar-usuarios.component.html',
  styleUrls: ['./visualizar-usuarios.component.scss']
})
export class VisualizarUsuariosComponent implements OnInit {

  usuarios?: Usuario[] = [];

  constructor(private usuarioSvc: UsuariosService) {}

  ngOnInit(): void {
    this.consultarTodos();    
  }

  escribirTipoDocumento(tipoDocumentoCode: string): string {
    return this.usuarioSvc.escribirTipoDocumento(tipoDocumentoCode);
  }

  escribirTipoUsuario(tipoUsuarioCode: string): string {
    return this.usuarioSvc.escribirTipoUsuario(tipoUsuarioCode);
  }

  consultarTodos(): void {
    this.usuarioSvc.consultarTodos().subscribe((data: any) => {
      this.usuarios = data.response;
    });
    /*const usuario1 = new Usuario(1, 'EST0001', '01', '02', '102587413', 'Mario', 'Carranza', '322147412', 'Pueblo 54', 'maca', '741258', false, new Date(), new Date());
    const usuario2 = new Usuario(3, 'EST0005', '01', '02', '102544741', 'Julia', 'Guitierres', '377410258', 'Pueblo 080', 'jugu', '12369', false, new Date(), new Date());
    const usuario3 = new Usuario(4, 'EST0006', '01', '02', '369852147', 'Mariana', 'Paez', '311474100', 'Pueblo 414', 'mapa', '852147', false, new Date(), new Date());

    this.usuarios?.push(usuario1);
    this.usuarios?.push(usuario2);
    this.usuarios?.push(usuario3);*/
  }

}
