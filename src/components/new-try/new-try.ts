import { Component, EventEmitter, output, Output } from '@angular/core';
import { GameService } from '../../services/game-service';
import { BoolPgiaModel } from '../../models/boolPgiaModel';

@Component({
  selector: 'app-new-try',
  imports: [],
  templateUrl: './new-try.html',
  styleUrl: './new-try.scss',
})

export class NewTry {
  constructor(public gameService: GameService){}

  guessColor: string [] = ["gray", "gray", "gray", "gray"]; 
  index: number = 0; 
  currenTry: BoolPgiaModel = new BoolPgiaModel()

  @Output()
  try: EventEmitter<boolean> = new EventEmitter<boolean>(true);

  fillCircle(color: string){
    if(this.index===4)
      return
    this.guessColor[this.index++] = color;
  }

  saveTry(){
    if(this.index!=4){
      alert("You need to fill all the circels")
      return;
    }
    this.currenTry.colors = this.guessColor
    this.gameService.add(this.currenTry); 
    this.try.emit(false)
  }
  cancel(){
    for (let i = 0; i < this.guessColor.length; i++)
      this.guessColor[i] = "gray";
    this.index=0;
  }
}
