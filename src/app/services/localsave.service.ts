import { Injectable } from '@angular/core';
// import { auth } from 'firebase/app';
// import { AngularFireAuth } from "@angular/fire/auth";
@Injectable({
  providedIn: 'root'
})
export class LocalsaveService {
usuario:any
constructor() {}

  set_localStorage(correo:string){
    this.usuario=correo;
    return localStorage.setItem("nombre",this.usuario);
  }

  get_localStorage(){
    return localStorage.getItem('nombre');
  }

logoutUser(){
  return localStorage.removeItem('nombre');
}

set_registro(nombre:string,correo:string,pass:any,repass:any){
  localStorage.setItem("usuario",nombre);
  localStorage.setItem("pass",pass);
  localStorage.setItem("repass",repass);
  return localStorage.setItem("nombre",correo);
}

}
