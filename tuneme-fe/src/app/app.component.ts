import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Import RouterOutlet
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadSectionComponent } from './components/download-section/download-section.component';
import { LeftNavMenuComponent } from './components/left-nav-menu/left-nav-menu.component'; // Import LeftNavMenuComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DownloadSectionComponent, LeftNavMenuComponent, RouterOutlet], // Add LeftNavMenuComponent and RouterOutlet
  template: `
    <app-header></app-header>
    <div class="main-container">
      <app-left-nav-menu></app-left-nav-menu>
      <div class="content-area">
        <router-outlet></router-outlet>
        <!-- Original content, now part of a route or removed if replaced by routes -->
        <!-- <h1>Hello, Angular!</h1> -->
        <!-- <app-download-section></app-download-section> -->
      </div>
    </div>
    <app-footer></app-footer>
  `,
  styles: [`
    .main-container {
      display: flex;
      margin-top: 60px; /* Height of the header */
    }

    .content-area {
      margin-left: 220px; /* Width of the sidebar */
      padding: 20px;
      flex-grow: 1;
    }

    @media (max-width: 768px) {
      .content-area {
        margin-left: 0; /* No margin on mobile when sidebar is hidden */
      }
    }
  `]
})
export class AppComponent {
  title = 'gemini-angular-app';
}
