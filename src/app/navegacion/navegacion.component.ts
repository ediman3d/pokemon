import { Component} from '@angular/core';
import {LocalsaveService} from "../services/localsave.service";

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {
correo:string;
  constructor(public local:LocalsaveService) {
this.correo= this.local.get_localStorage();
  }

  cerrarSesion(){
    this.local.logoutUser();
  }


}
