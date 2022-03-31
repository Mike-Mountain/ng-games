import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InstructionsComponent } from '@ng-games/shared/game-instructions';

@Injectable({
  providedIn: 'root',
})
export class ToolbarService {
  private titleSrc = new BehaviorSubject<string>('Ng Games');

  constructor(private matDialog: MatDialog) {}

  updateTitle(title: string) {
    this.titleSrc.next(title);
  }

  getTitle(): Observable<string> {
    return this.titleSrc.asObservable();
  }

  showInstructions(config?: MatDialogConfig) {
    this.matDialog.open(InstructionsComponent, config);
  }
}
