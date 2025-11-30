import { Injectable } from '@angular/core';
import { BoolPgiaModel } from '../models/boolPgiaModel';

@Injectable({
  providedIn: 'root',
})
export class GameService {

  colorList: string [] = ['#C77DFF','#FFE66D','#6BCB77','#4D96FF','#FFA36C','#FF6B6B']
  rightList: string[] = [this.colorList[Math.floor(Math.random() * 6)]
    , this.colorList[Math.floor(Math.random() * 6)],
  this.colorList[Math.floor(Math.random() * 6)],
  this.colorList[Math.floor(Math.random() * 6)]];
  guessList: BoolPgiaModel[] = [];


  getRightList(): string[] {
    for (let i = 0; i < 4; i++) {
      const random = Math.floor(Math.random() * 6) + 1;
      this.rightList[i] = this.colorList[random];
    }
    return this.rightList;
  }

  getAll(): BoolPgiaModel[] {
    return this.guessList;
  }

  add(guess: BoolPgiaModel): number {
    guess.id = this.generateId();
    if (guess.id > 10)
      return guess.id;
    this.guessList.push(guess)
    return guess.id
  }

  generateId(): number {
    let maxId = 0;
    this.guessList.forEach(x => {
      if (x.id > maxId)
        maxId = x.id;
    });
    return maxId + 1;
  }

  bool(colors: string[]): number {
    let count = 0;
    for (let i = 0; i < this.rightList.length; i++)
      if (this.rightList[i] === colors[i])
        count++;
    console.log(this.rightList);

    return count;
  }


  pgia(colors: string[]): number {
    let count = 0;
    let flags = [false, false, false, false];
    let flag;
    for (let i = 0; i < this.rightList.length; i++) {
      flag = false;
      for (let j = 0; j < colors.length; j++) {
        if (this.rightList[i] === colors[j] && i != j && !flags[j]  && !flag) {
          console.log("i = " +i +" and j = " +j);         
          count++;
          flags[j] = true;
          flag = true
          break;
        }
        if(this.rightList[i] === colors[j] && i===j) //תחליף ל'בול' שבפונקציה נפרדת
          flags[j] = true
      }
    }
    console.log(this.rightList);
    return count;
  }
}
