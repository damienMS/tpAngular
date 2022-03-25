import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetail } from '../pokemon';

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.css']
})
export class PokeDetailComponent implements OnInit {

  @Input('detail')
  detail!: PokemonDetail;

  constructor() { }

  ngOnInit(): void {
  }

}
