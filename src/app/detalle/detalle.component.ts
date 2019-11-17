import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../services/pokemon.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
pokemon:any;
evolucion:any;
cadenaEvolutiva:any[]=[];
imgEv:any;
imagenEvol:any;
  constructor(private route:ActivatedRoute,private pokeapi:PokemonService) {
this.route.params.subscribe(url => {

  // trae elpokemon
  this.pokeapi.obtenerListadoPokemon(url.id).subscribe((data:any)=> {
    this.pokemon=data;

// obtiene la evolucion
  this.pokeapi.obtenerEvolucionPokemon(url.id).subscribe((evol:any)=>{
    this.evolucion=evol.evolution_chain.url;

// trae la cadena de evolucion
    this.pokeapi.obtenerCadenaEvolucion(evol.evolution_chain.url).subscribe((cadena:any)=>{
      this.cadenaEvolutiva=cadena.chain.evolves_to;
      this.imgEv=this.cadenaEvolutiva[0].species.name;

      // trae la imagen de la evolucion
          this.pokeapi.obtenerListadoPokemon(this.imgEv).subscribe((dataimg:any)=>{
            this.imagenEvol=dataimg;
          });

    });


  });


});
});



}
  ngOnInit() {
  }

}
