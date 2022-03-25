import { Component, Input, OnInit } from '@angular/core';
import { PokeShareInfoService } from '../poke-share-info.service';
import { PokemonDetail } from '../pokemon';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  @Input('detail')
  detail!: PokemonDetail;

  constructor(private pokeShareInfoService : PokeShareInfoService) { 
    this.pokeShareInfoService.getObservable().subscribe (e => console.log('e' + e))
  }

  ngOnInit(): void {
  }

}
