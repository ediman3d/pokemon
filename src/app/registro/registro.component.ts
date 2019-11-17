import { Component, OnInit } from '@angular/core';
import {LocalsaveService} from "../services/localsave.service";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(public local:LocalsaveService) {
  }
  registro(nombre:string,correo:string,pass:any,repass:any){
  this.local.set_registro(nombre,correo,pass,repass);
  }

  ngOnInit() {
  }

}
