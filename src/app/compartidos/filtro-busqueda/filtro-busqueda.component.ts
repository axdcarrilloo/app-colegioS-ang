import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

declare var window: any;

@Component({
  selector: 'filtro-busqueda',
  templateUrl: './filtro-busqueda.component.html',
  styleUrls: ['./filtro-busqueda.component.scss']
})
export class FiltroBusquedaComponent implements OnInit {

  activacionBotonBuscar: boolean = true;
  caracteresInputBuscar:string = '';
  classBtnBuscar: string = 'btnBuscarDisabled';
  @Input() filtrarA!: string; // 01 mostrar usuario, 02 mostrar asignatura
  ocutarSelectUsuario: boolean = true;
  ocutarSelectAsignatura: boolean = true;
  selectAsignatura: string = '00';
  @Output() infoSeleccionada = new EventEmitter<any[]>();

  ngOnInit(): void {
    this.elegirFiltracion();
  }

  elegirFiltracion(): void {
    if(this.filtrarA == '01') {
      this.ocutarSelectUsuario = false;
      this.ocutarSelectAsignatura = true;
    } 
    if(this.filtrarA == '02') {
      this.ocutarSelectUsuario = true;
      this.ocutarSelectAsignatura = false;
    }
  }

  activarBotonBuscar(): void {
    let caracteres = this.caracteresInputBuscar.length;
    if(caracteres >= 4) {
      this.activacionBotonBuscar = false;
      this.classBtnBuscar = 'btnBuscar';
    } else {
      this.activacionBotonBuscar = true;
      this.classBtnBuscar = 'btnBuscarDisabled';
    }    
  }

  enviarInfoSeleccionada(): void {
    let info = [];
    info[0] = this.selectAsignatura;
    info[1] = this.caracteresInputBuscar
    info[2] = this.filtrarA;
    this.infoSeleccionada.emit(info);
    this.limpiarCamposBusqueda();
  }

  limpiarCamposBusqueda(): void {
    this.selectAsignatura = '00';
    this.caracteresInputBuscar = '';
  }

}
