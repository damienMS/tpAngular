import { Component, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { Pokemon, PokemonDetail } from '../pokemon';
import { PokemonApiServiceService } from '../pokemon-api-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  providers :[PokemonApiServiceService]
})



export class MyComponentComponent implements OnInit {
  id : string = '';
  pokemonID : string ='';
  searchPokemonName :string ='';

  pokemons : Pokemon[] = [];
  pokemonDetail!: PokemonDetail ;
  constructor(private pokemonService : PokemonApiServiceService, private pokemonShareInfoService : PokeShareInfoService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((data) => {
      data.results.forEach((e,index) => {
        const name:string = e.name;
        this.pokemons.push(new Pokemon((index+1).toString(),name));
      });
    }); 
  }

  go(): void{
    if (this.pokemonID != ''){
      this.pokemonService.getPokemonInfo(this.pokemonID).
        subscribe(info => {
          this.pokemonDetail = info;
          this.pokemonShareInfoService.setValue(this.pokemonID);
         });
    };
  }

}
