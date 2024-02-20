import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule, MatButtonModule, MatToolbarModule, RouterLink, RouterLinkActive],
  template: `
    <header>
      <mat-toolbar color="primary">
        <a mat-button routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true}" routerLink="/product" >Product</a>
        <a mat-button href="https://www.google.com/" >Cart</a>
      </mat-toolbar>
    </header>

    <main style="padding: 16px;">
      <router-outlet />
    </main>
  `,
  styles: [
    `
      .example-spacer {
        flex: 1 1 auto;
      }
      .active {
        color: pink !important;
      }
    `,
  ],
})
export class AppComponent {
  title = 'rxjs-with-signal';
}
