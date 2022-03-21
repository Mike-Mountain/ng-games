import { Component } from '@angular/core';

@Component({
  selector: 'ng-games-mastermind-entry',
  template: `<div class="remote-entry">
    <h2>mastermind's Remote Entry Component</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {}
