import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InstructionsComponent } from '@ng-games/shared/game-instructions';
import { GameSettingsComponent } from '@ng-games/shared/game-settings';
import { SettingsService } from '@ng-games/shared/data';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  private titleSrc = new BehaviorSubject<string>('Ng Games');

  constructor(
    private matDialog: MatDialog,
    private settingsService: SettingsService
  ) {}

  updateTitle(title: string) {
    this.titleSrc.next(title);
  }

  getTitle(): Observable<string> {
    return this.titleSrc.asObservable();
  }

  showInstructions(config?: MatDialogConfig) {
    this.matDialog.open(InstructionsComponent, config);
  }

  showSettings(config?: MatDialogConfig) {
    this.matDialog
      .open(GameSettingsComponent, config)
      .afterClosed()
      .subscribe((data) => {
        if (data) {
          this.settingsService.updateSettings(data);
        }
      });
  }
}
