import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AuthConfig } from '@ng-games/auth';
import {
  createCodeMasterSettingsForm,
  createSettings,
  Settings,
} from '@ng-games/shared/data';

@Component({
  selector: 'gst-game-settings',
  templateUrl: './game-settings.component.html',
  styleUrls: ['./game-settings.component.scss'],
})
export class GameSettingsComponent implements OnInit {
  settings: Settings = createSettings();
  settingsForm: FormGroup | undefined;
  colorOptions = [
    'yellow',
    'light-green',
    'green',
    'light-blue',
    'blue',
    'indigo',
    'purple',
    'magenta',
    'red',
    'orange',
    'tangerine',
    'peach',
  ];

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<GameSettingsComponent>,
    @Inject(MAT_DIALOG_DATA) private data: AuthConfig
  ) {}

  ngOnInit(): void {
    this.settingsForm = createCodeMasterSettingsForm(
      this.formBuilder,
      this.settings.codeMaster
    );
  }

  saveSettings() {
    console.log(this.settingsForm?.value);
    const settings = createSettings({ codeMaster: this.settingsForm?.value });
    this.dialogRef.close(settings);
  }

  setColor(color: string) {
    this.settings.codeMaster.colors.shift();
    this.settings.codeMaster.colors.push(color);
  }
}
