import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SettingsStore } from './settings.store';
import { Settings } from './setting.model';

@Injectable({ providedIn: 'root' })
export class SettingsQuery extends Query<Settings> {
  constructor(protected override store: SettingsStore) {
    super(store);
  }
}
