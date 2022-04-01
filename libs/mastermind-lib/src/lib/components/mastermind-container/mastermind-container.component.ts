import {
  AfterViewInit,
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Colors, colors, createMsmGame } from '../../models/mastermind.model';
import { MastermindService } from '../../services/mastermind.service';
import { WinState } from '../../models/win-state.enum';
import { ToolbarService } from '@ng-games/container-lib';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'msm-mastermind-container',
  templateUrl: './mastermind-container.component.html',
  styleUrls: ['./mastermind-container.component.scss'],
})
export class MastermindContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('gameOver') private gameOver: TemplateRef<any> | undefined;

  public computerColors: Colors[] = [];
  public colors = colors;
  public showColors = false;

  public state: WinState = WinState.InProgress;
  public WinsState = WinState;

  constructor(
    private mastermindService: MastermindService,
    private toolbarService: ToolbarService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.toolbarService.updateTitle('Code Master');
    this.computerColors = this.mastermindService.selectComputerColors();
    this.mastermindService.turns = createMsmGame(10);
  }

  ngAfterViewInit() {
    this.mastermindService.winState$.subscribe((winState) => {
      const inProgress = winState === WinState.InProgress;
      this.showColors = !inProgress;
      if (this.gameOver && !inProgress) {
        this.dialog.open(this.gameOver);
      }
      this.state = winState;
    });
  }

  playAgain() {
    window.location.reload();
  }
}
