import { Component } from '@angular/core';
import { Constantes } from 'src/app/utils/constantes';

@Component({
  selector: 'roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {

  opcionRol = Constantes.opcionRol;

}
