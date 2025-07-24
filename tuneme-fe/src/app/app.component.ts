import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadSectionComponent } from './components/download-section/download-section.component';
import { LeftNavMenuComponent } from './components/left-nav-menu/left-nav-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, DownloadSectionComponent, LeftNavMenuComponent, RouterOutlet, CommonModule],
  template: `
    <app-header></app-header>
    <div class="main-container">
      <app-left-nav-menu></app-left-nav-menu>
      <div class="content-area">
        <router-outlet></router-outlet>
      </div>
    </div>
    <app-footer></app-footer>
    <button *ngIf="showBackToTop" class="back-to-top" (click)="scrollToTop()">
      Back to Top
    </button>
  `,
  styles: [`
    .main-container {
      display: flex;
      margin-top: 80px;
      min-height: calc(100vh - 140px);
    }
    .content-area {
      margin-left: 220px;
      padding: 20px;
      flex-grow: 1;
    }
    .back-to-top {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #ed8b00;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 10px 20px;
      cursor: pointer;
      z-index: 1000;
    }
    .back-to-top:hover {
      background-color: #d47c00;
    }
    @media (max-width: 768px) {
      .main-container {
        margin-top: 0;
        flex-direction: column;
      }
      .content-area {
        margin-left: 0;
      }
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'gemini-angular-app';
  showBackToTop = false;

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router.routerState.root;
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route.snapshot.data['title'] || 'Tune Me';
      })
    ).subscribe((title: string) => {
      this.titleService.setTitle(title);
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showBackToTop = window.pageYOffset > 100;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
