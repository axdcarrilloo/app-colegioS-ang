import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AsignaturaDto } from 'src/app/dtos/asignatura-dto';
import { Respuesta } from 'src/app/dtos/respuesta';
import { AsignaturasService } from 'src/app/servicios/asignaturas.service';

@Component({
  selector: 'visualizar-asignaturas',
  templateUrl: './visualizar-asignaturas.component.html',
  styleUrls: ['./visualizar-asignaturas.component.scss']
})
export class VisualizarAsignaturasComponent implements OnInit {

  asignaturas!: AsignaturaDto[];

  constructor(private asignaturaSvc: AsignaturasService) {}

  ngOnInit(): void {
    this.consultarTodos();
  }

  consultarTodos(): void {
    this.asignaturaSvc.consultarTodos().subscribe((data: Respuesta) => {
      this.asignaturas = data.response;
      // console.log(this.asignaturas);
    });
  }

  recibirFiltrosBusqueda(datos: any): void {
    // let filtrarPor = datos[0];
    // let campoBusqueda = datos[1];
    let filtrarA = datos[2];
    if(filtrarA == '02') {
      this.asignaturas = [];
      this.filtrarAsignaturas(datos[1]);
    }
    if(filtrarA == '01') {
      this.filtrarEstudiantes();
    }
  }

  filtrarAsignaturas(campoBuscar: string): void {
    this.filtrarAsignaturaPorNombre(campoBuscar);
  }

  filtrarAsignaturaPorNombre(nombre: string): void {
    this.asignaturas.reduce;
    this.asignaturaSvc.consultarPorNombre(nombre).subscribe((data: Respuesta) => {
      this.asignaturas.push(data.response);
    },
    (data: HttpErrorResponse) => {
      console.log(data.error.response);
    });
  }

  filtrarEstudiantes(): void {
    console.log('Filtrar a Estudiantes...!');
  }

}
