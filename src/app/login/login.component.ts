import { Component } from '@angular/core';
import {LocalsaveService} from "../services/localsave.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public local:LocalsaveService) {
  }
usuario(data:string){
  this.local.set_localStorage(data);
}

}
