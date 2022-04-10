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
import { SessionQuery, SettingsQuery } from '@ng-games/shared/data';

@Component({
  selector: 'msm-mastermind-container',
  templateUrl: './mastermind-container.component.html',
  styleUrls: ['./mastermind-container.component.scss'],
})
export class MastermindContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('gameOver') private gameOver: TemplateRef<HTMLElement> | undefined;

  public computerColors: string[] = [];
  public colors = colors;
  public showColors = false;

  public state: WinState = WinState.InProgress;
  public WinsState = WinState;

  private turns = 0;

  constructor(
    private mastermindService: MastermindService,
    private settingsQuery: SettingsQuery,
    private toolbarService: ToolbarService,
    private sessionQuery: SessionQuery,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.sessionQuery.select().subscribe((session) => console.log(session));
    this.settingsQuery
      .select((settings) => settings.codeMaster)
      .subscribe((settings) => {
        this.colors = settings.colors;
        this.turns = settings.turnsNumber;
        this.computerColors = this.mastermindService.selectComputerColors();
        this.mastermindService.turns = createMsmGame(this.turns);
      });

    this.toolbarService.updateTitle('Code Master');
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
