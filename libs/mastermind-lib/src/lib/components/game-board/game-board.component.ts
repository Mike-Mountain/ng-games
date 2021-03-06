import { Component, Input, OnInit } from '@angular/core';
import { Color, Colors, MsmGameTurn } from '../../models/mastermind.model';
import { TurnState } from '../../models/turn-state.enum';
import { MastermindService } from '../../services/mastermind.service';
import { WinState } from '../../models/win-state.enum';

@Component({
  selector: 'msm-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  @Input() public colors: string[] = [];
  @Input() public masterColors: string[] = [];
  @Input() public state = WinState.InProgress;

  public turns: MsmGameTurn[] = [];
  public turnState = TurnState;
  public winState = WinState;

  constructor(private mastermindService: MastermindService) {}

  ngOnInit(): void {
    this.turns = this.mastermindService.turns;
  }

  toggleSelected(turnState: TurnState, color: Color, selectedColor?: string) {
    this.mastermindService.toggleSelectedColor(turnState, color, selectedColor);
  }

  completeTurn(turn: MsmGameTurn, idx: number) {
    if (
      turn.turnState === TurnState.InProgress &&
      MastermindService.canSelectColor(this.mastermindService.turns)
    ) {
      turn.turnState = TurnState.Complete;
      if (idx > 0) {
        this.turns[idx - 1].turnState = TurnState.InProgress;
      }
      turn.pins = this.mastermindService.completeTurn(turn, idx);
    }
  }
}
