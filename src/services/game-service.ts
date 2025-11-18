import { Injectable } from '@angular/core';
import { BoolPgiaModel } from '../models/boolPgiaModel';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  guessList: BoolPgiaModel[] = [];

  getAll(): BoolPgiaModel[] {
    return this.guessList;
  }

  add(guess: BoolPgiaModel):number {
    guess.id = this.generateId();
    this.guessList.push(guess)
    return guess.id
  }

  generateId():number {
    let maxId = 0;
    this.guessList.forEach(x => {
      if (x.id > maxId)
        maxId = x.id;
    });
    return maxId + 1;
  }

}
