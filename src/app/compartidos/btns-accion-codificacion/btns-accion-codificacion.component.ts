import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'btns-accion-codificacion',
  templateUrl: './btns-accion-codificacion.component.html',
  styleUrls: ['./btns-accion-codificacion.component.scss']
})
export class BtnsAccionCodificacionComponent {

  @Input() idParaTratarEliminacion: any;
  @Input() idParaTratarModificacion: any;

  @Output() idParaTratarEliminacionEmit = new EventEmitter<any[]>();
  @Output() idParaTratarModificacionEmit = new EventEmitter<any[]>();

  enviarDatosTratadosDeEliminacion(): void {
    this.idParaTratarEliminacionEmit.emit(this.idParaTratarEliminacion);
  }

  enviarDatosTratadosDeModificacion(): void {
    this.idParaTratarModificacionEmit.emit(this.idParaTratarModificacion);
  }

}
