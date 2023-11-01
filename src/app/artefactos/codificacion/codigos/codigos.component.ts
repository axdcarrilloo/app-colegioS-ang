import { Component } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'codigos',
  templateUrl: './codigos.component.html',
  styleUrls: ['./codigos.component.scss']
})
export class CodigosComponent {

  opcionCodigo = Constantes.opcionCodigo;

}
