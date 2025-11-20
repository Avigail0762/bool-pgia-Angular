import { Component, Input } from '@angular/core';
import { GameService } from '../../services/game-service';

@Component({
  selector: 'app-bool-pgia',
  imports: [],
  templateUrl: './bool-pgia.html',
  styleUrl: './bool-pgia.scss',
})

export class BoolPgia {
  constructor(public gameService: GameService) {
    this.bool = this.gameService.bool(this.colors);
    this.pgia = this.gameService.pgia(this.colors);
  }

  @Input()
  colors: string[] = []

  bool: number = 0;
  pgia: number = 0;

  ngOnInit() {
    this.bool = this.gameService.bool(this.colors);
    this.pgia = this.gameService.pgia(this.colors);
  }
}
