import { NgModule } from '@angular/core';

import { FiltroBusquedaComponent } from './filtro-busqueda/filtro-busqueda.component';
import { FormsModule } from '@angular/forms';
import { ModalGeneralComponent } from './modal-general/modal-general.component';
import { BtnsAccionCodificacionComponent } from './btns-accion-codificacion/btns-accion-codificacion.component';

@NgModule({
    declarations: [ FiltroBusquedaComponent, ModalGeneralComponent, BtnsAccionCodificacionComponent ],
    imports: [ FormsModule ],
    exports: [ FiltroBusquedaComponent, ModalGeneralComponent, BtnsAccionCodificacionComponent ]
})
export class CompartidosModule {}