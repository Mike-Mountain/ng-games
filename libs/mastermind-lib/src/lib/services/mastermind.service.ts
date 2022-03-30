import { Injectable } from '@angular/core';
import { Color, Colors, MsmGameTurn, Pin } from '../models/mastermind.model';
import { TurnState } from '../models/turn-state.enum';
import { BehaviorSubject } from 'rxjs';
import { WinState } from '@ng-games/libs/mastermind/models/win-state.enum';

@Injectable({
  providedIn: 'root',
})
export class MastermindService {
  get computerColors(): Colors[] {
    return this._computerColors;
  }

  set computerColors(value: Colors[]) {
    this._computerColors = value;
  }

  get turns(): MsmGameTurn[] {
    return this._turns;
  }

  set turns(value: MsmGameTurn[]) {
    this._turns = value;
  }

  private winStateSrc = new BehaviorSubject(WinState.InProgress);
  public winState$ = this.winStateSrc.asObservable();

  private _turns: MsmGameTurn[] = [];
  private _computerColors: Colors[] = [];

  constructor() {}

  public selectComputerColors(): Colors[] {
    const tempArray = Array.from(Array(4).keys());
    const colors: Colors[] = ['red', 'blue', 'green', 'yellow', ''];

    this.computerColors = tempArray.map(() => {
      const randomIdx = Math.floor(Math.random() * 5);
      return colors[randomIdx];
    });
    console.log('Computer:', this.computerColors);
    return this.computerColors;
  }

  public toggleSelectedColor(
    turnState: TurnState,
    color: Color,
    selectedColor?: Colors
  ) {
    if (turnState === TurnState.InProgress) {
      const canSelect = this.canSelectColor();
      if (!selectedColor && !canSelect) {
        return;
      }

      if (color.selectedColor) {
        color.selectedColor = '';
        return;
      }

      if (selectedColor) {
        color.selectedColor = selectedColor;
      }

      color.selectable = !color.selectable;
    }
  }

  public completeTurn(turn: MsmGameTurn, gameIdx: number): Pin[] {
    const pins: Pin[] = [];
    const player: Colors[] = turn.colors.map((color) => color.selectedColor);
    const computer = this.computerColors.map((i) => i);
    // Find exact match
    for (let i = player.length - 1; i >= 0; i--) {
      if (player[i] === computer[i]) {
        pins.push({ color: 'black' });
        player.splice(i, 1);
        computer.splice(i, 1);
      }
    }
    // Find partial match. Separate for loop to prevent counting black pins
    for (let i = player.length - 1; i >= 0; i--) {
      if (computer.includes(player[i])) {
        const idx = computer.findIndex((color) => color === player[i]);
        pins.push({ color: 'white' });
        player.splice(i, 1);
        computer.splice(idx, 1);
      } else {
        pins.push({ color: '' });
      }
    }
    this.checkForWin(pins, gameIdx);
    return this.sortPins(pins);
  }

  public checkForWin(pins: Pin[], gameIdx: number) {
    const state =
      pins.filter((pin) => pin.color !== 'black').length === 0
        ? WinState.Won
        : gameIdx === 0
        ? WinState.Lost
        : WinState.InProgress;
    this.winStateSrc.next(state);
  }

  private sortPins(pins: Pin[]): Pin[] {
    return pins.sort((a, b) => {
      if (a.color === '') {
        return 1;
      } else {
        if (a.color === 'white' && b.color === 'black') {
          return 1;
        }
        return -1;
      }
    });
  }

  private canSelectColor(): boolean {
    let canSelect = true;
    this.turns.forEach((turn) => {
      turn.colors.forEach((color) => {
        if (color.selectable) {
          canSelect = false;
        }
      });
    });
    return canSelect;
  }
}
