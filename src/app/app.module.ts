import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { ArtefactosModule } from './artefactos/artefactos-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ArtefactosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
