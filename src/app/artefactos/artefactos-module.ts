
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { RegistrarUsuarioComponent } from './usuarios/registrar-usuario/registrar-usuario.component';
import { VisualizarUsuariosComponent } from './usuarios/visualizar-usuarios/visualizar-usuarios.component';
import { ServiciosModule } from '../servicios/servicios.module';
import { RegistrarAsignaturasComponent } from './asignaturas/registrar-asignaturas/registrar-asignaturas.component';
import { VisualizarAsignaturasComponent } from './asignaturas/visualizar-asignaturas/visualizar-asignaturas.component';
import { CompartidosModule } from '../compartidos/compartidos-module';
import { VisualizarEstudiantesComponent } from './usuarios/visualizar-estudiantes/visualizar-estudiantes.component';

@NgModule({
    declarations: [ MenuPrincipalComponent, RegistrarUsuarioComponent, VisualizarUsuariosComponent, RegistrarAsignaturasComponent, VisualizarAsignaturasComponent,
        VisualizarEstudiantesComponent    
    ],
    imports:[ CommonModule, AppRoutingModule, ServiciosModule, FormsModule, ReactiveFormsModule, CompartidosModule ],
    exports: [ MenuPrincipalComponent ]

})
export class ArtefactosModule {}