import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Colors, colors, createMsmGame } from '../../models/mastermind.model';
import { MastermindService } from '../../services/mastermind.service';
import { WinState } from '../../models/win-state.enum';
import { ToolbarService } from '@ng-games/container-lib';

@Component({
  selector: 'msm-mastermind-container',
  templateUrl: './mastermind-container.component.html',
  styleUrls: ['./mastermind-container.component.scss'],
})
export class MastermindContainerComponent implements OnInit, AfterViewInit {
  public computerColors: Colors[] = [];
  public colors = colors;

  public gameOver = false;
  public state: WinState = WinState.InProgress;
  public WinsState = WinState;

  constructor(
    private mastermindService: MastermindService,
    private toolbarService: ToolbarService
  ) {}

  ngOnInit(): void {
    this.toolbarService.updateTitle('Code Master');
    this.computerColors = this.mastermindService.selectComputerColors();
    this.mastermindService.turns = createMsmGame(10);
  }

  ngAfterViewInit() {
    this.mastermindService.winState$.subscribe((winState) => {
      this.gameOver = winState !== WinState.InProgress;
      this.state = winState;
    });
  }

  playAgain() {
    window.location.reload();
  }
}
