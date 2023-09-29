import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.scss']
})
export class MenuPrincipalComponent implements OnInit{

  iconoEscudo = environment.ICON_ESCUDO_MENU_PRINCIPAL;
  iconoCerrarSesion = environment.ICON_CERRAR_SESION;
  iconoIniciarSesion = environment.ICON_INICIAR_SESION;
  @Input() tipoMenu: string = '';
  tipoUsuarioEstudiante: string = '01';
  tipoUsuarioProfesor: string = '02';
  tipoUsuarioCoordinador: string = '03';
  tipoUsuarioRector: string = '04';

  ngOnInit(): void {}

}
