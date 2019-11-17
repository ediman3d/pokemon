import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http:HttpClient) {
  console.log("servicio listo");
}
pokemones:any[]=[];
obtenerListado(){
  return this.http.get('https://pokeapi.co/api/v2/pokemon/?limit=50&offset=0').pipe( map((data:any) =>{
    return data['results'];
  }));
}
obtenerListadoPokemon(pokemon:any){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).pipe(map((data:any)=>{
    return data;
  }));
}

obtenerEvolucionPokemon(id:any){
  return this.http.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`).pipe(map((data:any)=>{
  return data;
  }));
}
obtenerCadenaEvolucion(data:any){
  return this.http.get(data).pipe(map((cadena:any)=>{
   return cadena;
 }));
}


}
