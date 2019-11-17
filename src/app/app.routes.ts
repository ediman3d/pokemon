import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistroComponent} from "./registro/registro.component";
import {PrincipalComponent} from "./principal/principal.component";
import {BuscarComponent} from "./buscar/buscar.component";
import {DetalleComponent} from "./detalle/detalle.component";

const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'buscar', component: BuscarComponent },
  { path: 'detalle/:id', component: DetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash:true});
