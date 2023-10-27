import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Respuesta } from 'src/app/dtos/respuesta';
import { Usuario } from 'src/app/dtos/usuario-dto';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'app-visualizar-estudiantes',
  templateUrl: './visualizar-estudiantes.component.html',
  styleUrls: ['./visualizar-estudiantes.component.scss']
})
export class VisualizarEstudiantesComponent {

  estudiantes: Usuario[] = [];

  modalErrorObjetoNoEncontrado!: any;
  infoModalObjetoNoEncontrado: string[] = Constantes.infoModalObjetoNoEncontrado;

  constructor(private usuarioSvc: UsuariosService) {}

  ngOnInit(): void {
    this.consultarTodos(); 
    this.cargarModals();
  }

  recibirFiltrosBusqueda(datos: any): void {
    // let filtrarPor = datos[0];
    // let campoBusqueda = datos[1];
    let filtrarA = datos[2];
    if(filtrarA == '02') {}
    if(filtrarA == '01') {
      this.estudiantes = [];
      this.filtrarEstudiantePorNombre(datos[1]);
    }
  }

  filtrarEstudiantePorNombre(nombre: string): void {
    this.usuarioSvc.consultarPorNombre(nombre).subscribe((data: Respuesta) => {
      console.log(data.response);
      this.estudiantes.push(data.response);
    },
    (data: HttpErrorResponse) => {
      console.log(data.error.response);
      if(data.status == 404) {
        this.consultarTodos();
        this.modalErrorObjetoNoEncontrado.show();
      }
    });
  }

  cargarModals(): void {
    this.modalErrorObjetoNoEncontrado = new window.bootstrap.Modal(
      document.getElementById("modalErrorObjetoNoEncontrado")
    );
  }

  consultarTodos(): void {
    this.usuarioSvc.consultarTodosEstudiantes().subscribe((data: any) => {
      this.estudiantes = data.response;
    },
    (data: HttpErrorResponse) => {
      //console.log(data.error.response);
      if(data.status == 504) {
        this.consultarTodos();
      }
    });
    /*const usuario1 = new Usuario(1, 'EST0001', '01', '02', '102587413', 'Mario', 'Carranza', '322147412', 'Pueblo 54', 'maca', '741258', false, new Date(), new Date());
    const usuario2 = new Usuario(3, 'EST0005', '01', '02', '102544741', 'Julia', 'Guitierres', '377410258', 'Pueblo 080', 'jugu', '12369', false, new Date(), new Date());
    const usuario3 = new Usuario(4, 'EST0006', '01', '02', '369852147', 'Mariana', 'Paez', '311474100', 'Pueblo 414', 'mapa', '852147', false, new Date(), new Date());

    this.usuarios?.push(usuario1);
    this.usuarios?.push(usuario2);
    this.usuarios?.push(usuario3);*/
  }

}
