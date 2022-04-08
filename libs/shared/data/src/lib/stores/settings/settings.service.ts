import { Injectable } from '@angular/core';
import { SettingsStore } from './settings.store';
import { Settings } from './setting.model';

@Injectable({ providedIn: 'root' })
export class SettingsService {
  constructor(private settingsStore: SettingsStore) {}

  updateSettings(settings: Settings) {
    console.log('Updating Settings:', settings);
    this.settingsStore.update(settings);
  }
}
