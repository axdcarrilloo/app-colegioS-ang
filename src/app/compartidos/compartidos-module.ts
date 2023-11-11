import { NgModule } from '@angular/core';

import { FiltroBusquedaComponent } from './filtro-busqueda/filtro-busqueda.component';
import { FormsModule } from '@angular/forms';
import { ModalGeneralComponent } from './modal-general/modal-general.component';
import { BtnsAccionCodificacionComponent } from './btns-accion-codificacion/btns-accion-codificacion.component';
import { PreguntaEliminacionComponent } from './pregunta-eliminacion/pregunta-eliminacion.component';

@NgModule({
    declarations: [ FiltroBusquedaComponent, ModalGeneralComponent, BtnsAccionCodificacionComponent, PreguntaEliminacionComponent ],
    imports: [ FormsModule ],
    exports: [ FiltroBusquedaComponent, ModalGeneralComponent, BtnsAccionCodificacionComponent, PreguntaEliminacionComponent ]
})
export class CompartidosModule {}