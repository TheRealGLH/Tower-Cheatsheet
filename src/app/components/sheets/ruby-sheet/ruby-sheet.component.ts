import { Component } from '@angular/core';
import {calculate, Generations, Pokemon, Move, Result} from '@smogon/calc';

@Component({
  selector: 'app-ruby-sheet',
  templateUrl: './ruby-sheet.component.html',
  styleUrls: ['./ruby-sheet.component.css']
})
export class RubySheetComponent {
  gen = Generations.get(3); // alternatively: const gen = 5;
  enemyCalcResults:Result[] = [];
  myPokemon =   new Pokemon(this.gen, 'Gengar', {
    item: 'Wiseglasses',
    nature: 'Timid',
    level: 50,
    evs: {spa: 252}
  });
  trainerPokemon =   new Pokemon(this.gen, 'Chansey', {
    item: 'Leftovers',
    nature: 'Calm',
    evs: {hp: 252, spd: 252},
    moves: ['Seismic Toss', 'Softboiled', 'Pound']
  });
  result = this.recalculate();

ngOnInit(){
  //console.log(this.result);
}

selectedTrainerPokemon(pokemon: Pokemon){
  this.trainerPokemon = pokemon;
  this.calculateEnemyMoves();
  this.result = this.recalculate();
}

//Todo: make this go both ways or something. This solution is just rudamentary for now.
recalculate():Result{
  return calculate(
    this.gen,
    this.myPokemon,
    this.trainerPokemon,
    new Move(this.gen, 'Giga Drain')
  );
}

calculateEnemyMoves(){
  this.enemyCalcResults = [];
  this.trainerPokemon.moves.forEach(move => {
    this.enemyCalcResults.push(calculate(
      this.gen,this.trainerPokemon,this.myPokemon,new Move(this.gen, move)
    ))
  });
}


}


