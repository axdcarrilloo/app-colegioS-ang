import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { RegistrarUsuarioComponent } from './artefactos/usuarios/registrar-usuario/registrar-usuario.component';
import { VisualizarUsuariosComponent } from './artefactos/usuarios/visualizar-usuarios/visualizar-usuarios.component';
import { RegistrarAsignaturasComponent } from './artefactos/asignaturas/registrar-asignaturas/registrar-asignaturas.component';
import { VisualizarAsignaturasComponent } from './artefactos/asignaturas/visualizar-asignaturas/visualizar-asignaturas.component';

const routes: Routes = [
  { path: 'inicio', component: AppComponent },
  { path: 'registrar-usuario/:tipoUsuario', component: RegistrarUsuarioComponent },
  { path: 'visualizar-usuarios', component: VisualizarUsuariosComponent },
  { path: 'registrar-asignatura', component: RegistrarAsignaturasComponent },
  { path: 'visualizar-asignatura', component: VisualizarAsignaturasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
