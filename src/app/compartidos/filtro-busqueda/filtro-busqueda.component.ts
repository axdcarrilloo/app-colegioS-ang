import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'filtro-busqueda',
  templateUrl: './filtro-busqueda.component.html',
  styleUrls: ['./filtro-busqueda.component.scss']
})
export class FiltroBusquedaComponent implements OnInit {

  activacionBotonBuscar: boolean = true;
  caracteresInputBuscar:string = '';
  classBtnBuscar: string = 'btnBuscarDisabled';
  @Input() filtrarA!: string; // 01 ocultar asignatura, 02 ocutar usuario
  ocutarSelectUsuario: boolean = true;
  ocutarSelectAsignatura: boolean = true;

  ngOnInit(): void {
    this.elegirFiltracion();
    console.log('filtrar A: : '+this.filtrarA);
    console.log('Ocultar select de asignatura: '+this.ocutarSelectAsignatura);
    console.log('Ocultar select de usuario: '+this.ocutarSelectUsuario);
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
    if(caracteres > 2) {
      this.activacionBotonBuscar = false;
      this.classBtnBuscar = 'btnBuscar';
    } else {
      this.activacionBotonBuscar = true;
      this.classBtnBuscar = 'btnBuscarDisabled';
    } 
  }

}
