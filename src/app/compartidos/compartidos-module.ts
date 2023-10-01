import { NgModule } from '@angular/core';

import { FiltroBusquedaComponent } from './filtro-busqueda/filtro-busqueda.component';
import { FormsModule } from '@angular/forms';
import { ModalGeneralComponent } from './modal-general/modal-general.component';

@NgModule({
    declarations: [ FiltroBusquedaComponent, ModalGeneralComponent ],
    imports: [ FormsModule ],
    exports: [ FiltroBusquedaComponent, ModalGeneralComponent ]
})
export class CompartidosModule {}