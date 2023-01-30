import { Component, Output, EventEmitter } from '@angular/core';
import {Pokemon} from '@smogon/calc';

@Component({
  selector: 'app-ruby-trainer-picker',
  templateUrl: './ruby-trainer-picker.component.html',
  styleUrls: ['./ruby-trainer-picker.component.css']
})
export class RubyTrainerPickerComponent {
  @Output() selectedPokemonEvent = new EventEmitter<Pokemon>();
  trainerPokemon:Pokemon[] = [
    new Pokemon(
      3,
      'Blissey',
      {level:50,
      item:'Leftovers'}
    ),
    new Pokemon(
      3,
      'Alakazam',
      {level:50,
      item:'Oran Berry'}
    ),
    new Pokemon(
      3,
      'Shuckle',
      {level:100,
      item:'Berry Juice'}
    ),
    new Pokemon(
      3,
      'Machamp',
      {level:50,
      item:'Choice Band'}
    ),
  ];
  selectedPokemon:Pokemon = this.trainerPokemon[0];

  selectPokemon(pokemon:Pokemon):void{
    this.selectedPokemon = pokemon;
    this.selectedPokemonEvent.emit(pokemon);
  }
}
