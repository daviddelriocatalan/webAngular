import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { EquipoComponent } from './equipo/equipo.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  /* { path: '**', component: HomeComponent }, */ //PREGUNTAR A SALVA PORQUE NO VAN LOS LINKS SI LO PONGO
  { path: 'equipo', component: EquipoComponent },
  {path: 'proyectos', component: ProyectosComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
