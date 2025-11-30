import { Component, Output } from '@angular/core';
import { GameService } from '../../services/game-service';
import { BoolPgiaModel } from '../../models/boolPgiaModel';
import { NewTry } from '../new-try/new-try';
import { BoolPgia } from '../bool-pgia/bool-pgia';

@Component({
  selector: 'app-try-list',
  imports: [NewTry ,BoolPgia],
  templateUrl: './try-list.html',
  styleUrl: './try-list.scss',
})
export class TryList {
  
    isWin: boolean = false

    constructor(public gameService: GameService){}
    guessList: BoolPgiaModel[] = [];
    isGuessMode: Boolean = true;

    ngOnInit(){
      this.guessList = this.gameService.getAll();
    }

    tryGuess(){
      this.isGuessMode = true;
    }

    try(){
      this.isGuessMode = false; 
    }

    win(){
      this.isWin = !this.isWin
    }
}
