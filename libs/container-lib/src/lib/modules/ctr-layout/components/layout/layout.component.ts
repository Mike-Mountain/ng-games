import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ToolbarService } from '../../services/toolbar.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { AuthAction, AuthDialogService } from '@ng-games/auth';
import { SessionQuery, SessionService } from '@ng-games/shared/data';

@Component({
  selector: 'ctr-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  public isHandset$: Observable<boolean>;
  public title$: Observable<string>;
  public isLoggedIn$: Observable<boolean> | undefined;
  public hasUpdate = false;
  public action = AuthAction;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private toolbarService: ToolbarService,
    private router: Router,
    private updates: SwUpdate,
    private authDialog: AuthDialogService,
    private sessionQuery: SessionQuery,
    private sessionService: SessionService
  ) {
    this.isHandset$ = breakpointObserver.observe(Breakpoints.Handset).pipe(
      map((result) => result.matches),
      shareReplay()
    );
    this.title$ = this.toolbarService.getTitle();
    updates.versionUpdates.subscribe((event) => {
      if (event.type === 'VERSION_DETECTED') {
        this.hasUpdate = true;
      }
    });
  }

  ngOnInit() {
    this.isLoggedIn$ = this.sessionQuery.isLoggedIn$;
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

  getNewVersion() {
    this.updates.activateUpdate().then(() => window.location.reload());
  }

  openAuth(action: AuthAction) {
    this.authDialog.openAuthDialog({ data: { action } });
  }

  logout() {
    this.sessionService.logout();
  }
}
