import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'msm-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  turns = new Array(10);
  colors = ['red', 'blue', 'green', 'yellow'];

  constructor() {}

  ngOnInit(): void {}
}
