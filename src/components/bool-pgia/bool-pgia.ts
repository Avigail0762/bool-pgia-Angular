import { Component, Input, output } from '@angular/core';
import { GameService } from '../../services/game-service';

@Component({
  selector: 'app-bool-pgia',
  imports: [],
  templateUrl: './bool-pgia.html',
  styleUrl: './bool-pgia.scss',
})

export class BoolPgia {
  constructor(public gameService: GameService) {
  }

  @Input()
  colors: string[] = []
  rightColors: string[] = []

  winner = output<boolean>()

  bool: number = 0;
  pgia: number = 0;

  ngOnChanges() {
    this.bool = this.gameService.bool(this.colors);
    this.pgia = this.gameService.pgia(this.colors);
    if(this.bool===4)
      this.winner.emit(true)
  }
}
