import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { RegistrarUsuarioComponent } from './artefactos/usuarios/registrar-usuario/registrar-usuario.component';
import { RegistrarAsignaturasComponent } from './artefactos/asignaturas/registrar-asignaturas/registrar-asignaturas.component';
import { VisualizarAsignaturasComponent } from './artefactos/asignaturas/visualizar-asignaturas/visualizar-asignaturas.component';
import { VisualizarEstudiantesComponent } from './artefactos/usuarios/visualizar-estudiantes/visualizar-estudiantes.component';
import { RolesComponent } from './artefactos/codificacion/roles/roles.component';

const routes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'registrar-usuario/:tipoUsuario', component: RegistrarUsuarioComponent },
  { path: 'visualizar-estudiantes', component: VisualizarEstudiantesComponent },
  { path: 'registrar-asignatura', component: RegistrarAsignaturasComponent },
  { path: 'visualizar-asignatura', component: VisualizarAsignaturasComponent },
  { path: 'roles', component: RolesComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
