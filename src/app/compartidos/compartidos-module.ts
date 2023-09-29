import { NgModule } from '@angular/core';

import { FiltroBusquedaComponent } from './filtro-busqueda/filtro-busqueda.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ FiltroBusquedaComponent ],
    imports: [ FormsModule ],
    exports: [ FiltroBusquedaComponent ]
})
export class CompartidosModule {}