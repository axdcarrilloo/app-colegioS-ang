import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'modal-general',
  templateUrl: './modal-general.component.html',
  styleUrls: ['./modal-general.component.scss']
})
export class ModalGeneralComponent implements OnInit {

  imgMensaje: string = '../../../assets/icons/exito.png';
  //Pocision[0]: Modal de error = 02, modal de exito = 01
  //Pocision[1]: Titulo
  //Pocision[2]: Mensaje
  @Input() infoModal!: string[];

  modalHeader: string = 'modal-header-exitoso';

  ngOnInit(): void {
    this.cargarModal();
  }

  cargarModal(): void {
    if(this,this.infoModal[0] == '02') {
      this.imgMensaje = '../../../assets/icons/error.png';
      this.modalHeader = 'modal-header-error';
    }
  }

}
