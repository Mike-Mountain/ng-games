import { Component, Input, OnInit } from '@angular/core';
import { Colors } from '../../models/mastermind.model';

@Component({
  selector: 'msm-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  @Input() chances = 0;
  @Input() colors: Colors[] = [];

  gameTurns: never[] = [];

  constructor() {}

  ngOnInit(): void {
    this.gameTurns = new Array(this.chances).map((i) => i as never);
  }
}
