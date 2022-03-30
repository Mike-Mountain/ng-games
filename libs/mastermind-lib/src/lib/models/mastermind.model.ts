import { TurnState } from '../models/turn-state.enum';

export type Colors = 'red' | 'blue' | 'green' | 'yellow' | '';
export type Pins = 'black' | 'white' | '';

export const colors: Colors[] = ['red', 'blue', 'green', 'yellow'];

export interface MsmGameTurn {
  colors: Color[];
  pins: Pin[];
  turnState: TurnState;
}

export interface Color {
  selectable: boolean;
  selectedColor: Colors;
}

export interface Pin {
  color: Pins;
}

export function createMsmGame(chances: number): MsmGameTurn[] {
  const gameTurns = Array.from(Array(chances).keys());
  return gameTurns.map((t, idx) => {
    return {
      turnState:
        idx === gameTurns.length - 1
          ? TurnState.InProgress
          : TurnState.NotStarted,
      colors: colors.map(() => {
        return { selectable: false, selectedColor: '' };
      }),
      pins: colors.map(() => {
        return { color: '' };
      }),
    } as MsmGameTurn;
  });
}
