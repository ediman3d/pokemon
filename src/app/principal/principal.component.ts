import { Component } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
listapokemon:any[]=[];
monstruos:any[]=[];
  constructor(private pokeapi:PokemonService, private router: Router) {
     this.pokeapi.obtenerListado().subscribe((data:any) =>{
      this.listapokemon=data;
for(let i=0;i<this.listapokemon.length;i++){
  this.pokeapi.obtenerListadoPokemon(this.listapokemon[i].name).subscribe((data:any)=>{
  this.monstruos[i]=data;
});
     }
   });
}

verPokemon(pokemon:any){
console.log(pokemon);
this.router.navigate(['/detalle',pokemon]);
}

}
