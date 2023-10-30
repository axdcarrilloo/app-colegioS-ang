import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsuariosService } from './usuarios.service';
import { AsignaturasService } from './asignaturas.service';
import { RolService } from './rol.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule ],
  providers: [ UsuariosService, AsignaturasService, RolService ]
})
export class ServiciosModule { }
