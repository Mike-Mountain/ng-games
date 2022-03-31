import { Component, Type } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ToolbarService } from '../../services/toolbar.service';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { InstructionsComponent } from '@ng-games/shared/game-instructions';

@Component({
  selector: 'ctr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  public isHandset$: Observable<boolean>;
  public title$: Observable<string>;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private toolbarService: ToolbarService,
    private router: Router
  ) {
    this.isHandset$ = breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.toolbarService.updateTitle(this.setTitle(event.url));
      }
    });
    this.title$ = this.toolbarService.getTitle();
  }

  route(path: string, drawer: MatSidenav, title: string) {
    this.router.navigate([path]).then(() => {
      drawer.close();
      this.toolbarService.updateTitle(title);
    });
  }

  openInstructions() {
    this.toolbarService.showInstructions();
  }

  private setTitle(url: string): string {
    switch (url) {
      case 'code-master':
        return 'Code Master';
      default:
        return 'Ng Games';
    }
  }
}
