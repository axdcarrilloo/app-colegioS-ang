import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsuariosService } from './usuarios.service';
import { AsignaturasService } from './asignaturas.service';

@NgModule({
  declarations: [],
  imports: [ CommonModule, HttpClientModule ],
  providers: [ UsuariosService, AsignaturasService ]
})
export class ServiciosModule { }
