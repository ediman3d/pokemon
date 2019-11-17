import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//rutas
import {APP_ROUTING} from "./app.routes";

//servicios
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetalleComponent } from './detalle/detalle.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { LoginComponent } from './login/login.component';
import { BuscarComponent } from './buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    PrincipalComponent,
    DetalleComponent,
    NavegacionComponent,
    LoginComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
