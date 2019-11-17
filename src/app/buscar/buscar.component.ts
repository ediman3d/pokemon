import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
pokemon:any;
  constructor(private pokeapi:PokemonService,private router:Router) { }

  ngOnInit() {
  }
buscar(termino:any){
  console.log(termino);
  this.pokeapi.obtenerListadoPokemon(termino).subscribe((data:any)=> {
    this.pokemon=data;
    console.log(this.pokemon);
  });
}
verPokemon(pokemon:any){
console.log(pokemon);
this.router.navigate(['/detalle',pokemon]);
}
}
