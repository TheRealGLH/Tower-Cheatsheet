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
      item:'Leftovers',
      moves: ['Seismic Toss', 'Softboiled']}
    ),
    new Pokemon(
      3,
      'Alakazam',
      {level:50,
      item:'Oran Berry',
      moves: ['Psychic']}
    ),
    new Pokemon(
      3,
      'Shuckle',
      {level:100,
      item:'Berry Juice',
      moves:['Tackle']}
    ),
    new Pokemon(
      3,
      'Machamp',
      {level:50,
      item:'Choice Band',
      moves: ['Rock Slide','Submission','Flamethrower'],
      evs: {atk: 252}}
    ),
    new Pokemon(
      3,
      'Raichu',
      {level:50,
      item: 'Magnet',
      moves: ['Volt Tackle']}
    ),
    new Pokemon(
      3,
      'Pikachu',
      {level:50,
      item: 'Magnet',
      moves: ['Volt Tackle']}
    ),
    new Pokemon(
      3,
      'Scizor',
      {level:50,
      item: 'Choice Band',
      moves: ['Metal Claw']}
    ),
    new Pokemon(
      3,
      'Metagross',
      {level:50,
      item: 'Choice Band',
      moves: ['Earthquake','Explosion','Meteor Mash','Sludge Bomb']}
    ),
    new Pokemon(
      3,
      'Magikarp',
      {level:50,
      item: 'Focus Band',
      moves: ['Tackle','Splash','Flail']}
    ),
    new Pokemon(
      3,
      'Aerodactyl',
      {level:50,
      item: 'Magnet',
      moves: ['Rock Slide','Earthquake']}
    )
  ];
  selectedPokemon:Pokemon = this.trainerPokemon[0];

  selectPokemon(pokemon:Pokemon):void{
    this.selectedPokemon = pokemon;
    this.selectedPokemonEvent.emit(pokemon);
  }
}
