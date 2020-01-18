import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BarraNavegadoraComponent } from './barra-navegadora/barra-navegadora.component';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EquipoComponent } from './equipo/equipo.component';


@NgModule({
  declarations: [
    AppComponent,
    BarraNavegadoraComponent,
    HomeComponent,
    ProyectosComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  exports:[
    BarraNavegadoraComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
