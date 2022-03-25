import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetail, PokeServiceRes } from './pokemon';

const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';


@Injectable({
  providedIn: 'root'
})


export class PokemonApiServiceService {
  
  

  constructor(private httpClient: HttpClient) { }

  getPokemons(): Observable<PokeServiceRes> {
    return this.httpClient.get<PokeServiceRes>(apiUrl);
  }

  getPokemonInfo(id:string): Observable<PokemonDetail>{
    return this.httpClient.get<PokemonDetail>(apiUrl+id+'/');
  }
}
