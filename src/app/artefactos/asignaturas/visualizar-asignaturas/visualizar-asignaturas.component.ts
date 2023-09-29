import { Component, OnInit } from '@angular/core';
import { AsignaturaDto } from 'src/app/dtos/asignatura-dto';
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
    this.asignaturaSvc.consultarTodos().subscribe((data: any) => {
      this.asignaturas = data.response;
      console.log(this.asignaturas);
    });
  }

}
