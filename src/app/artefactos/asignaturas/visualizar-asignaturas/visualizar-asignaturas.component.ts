import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AsignaturaDto } from 'src/app/dtos/asignatura-dto';
import { Respuesta } from 'src/app/dtos/respuesta';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'visualizar-asignaturas',
  templateUrl: './visualizar-asignaturas.component.html',
  styleUrls: ['./visualizar-asignaturas.component.scss']
})
export class VisualizarAsignaturasComponent implements OnInit {

  asignaturas!: AsignaturaDto[];
  infoModalServidorCaido: string[] = Constantes.infoModalServidorHorarioCaido;
  modalErrorServidorCaido!: any;
  modalErrorObjetoNoEncontrado!: any;
  infoModalObjetoNoEncontrado: string[] = Constantes.infoModalObjetoNoEncontrado;

  constructor(private asignaturaSvc: AsignaturasService) {}

  ngOnInit(): void {
    this.consultarTodos();
    this.cargarModals();
  }

  cargarModals(): void {
    this.modalErrorServidorCaido = new window.bootstrap.Modal(
      document.getElementById("modalErrorServidorCaido")
    );
    this.modalErrorObjetoNoEncontrado = new window.bootstrap.Modal(
      document.getElementById("modalErrorObjetoNoEncontrado")
    );
  }

  consultarTodos(): void {
    this.asignaturaSvc.consultarTodos().subscribe((data: Respuesta) => {
      this.asignaturas = data.response;
      // console.log(this.asignaturas);
    },
    (data: HttpErrorResponse) => {
      // console.log(data.error.response);
      if(data.status == 504) {
        this.modalErrorServidorCaido.show();
      }
    });
  }

  recibirFiltrosBusqueda(datos: any): void {
    // let filtrarPor = datos[0];
    // let campoBusqueda = datos[1];
    let filtrarA = datos[2];
    if(filtrarA == '02') {
      this.asignaturas = [];
      this.filtrarAsignaturaPorNombre(datos[1]);
    }
    if(filtrarA == '01') {
    }
  }

  filtrarAsignaturaPorNombre(nombre: string): void {
    this.asignaturaSvc.consultarPorNombre(nombre).subscribe((data: Respuesta) => {
      this.asignaturas.push(data.response);
    },
    (data: HttpErrorResponse) => {
      //console.log(data.error.response);
      if(data.status == 404) {
        this.consultarTodos();
        this.modalErrorObjetoNoEncontrado.show();
      }
    });
  }
}
