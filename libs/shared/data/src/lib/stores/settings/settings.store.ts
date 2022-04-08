import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { createSettings, Settings } from './setting.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'settings' })
export class SettingsStore extends Store<Settings> {
  constructor() {
    super(createSettings());
  }
}
