import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_ITEMS, NavItem } from '../../shared/nav-items';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '../../services/user-profile.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[] = NAV_ITEMS;
  topLevelNavItems: NavItem[] = []; // New property for filtered top-level items
  currentUserRole: string = '';
  selectedLanguage: string = '';

  constructor(
    private authService: AuthService,
    private userProfileService: UserProfileService
  ) { }

  ngOnInit(): void {
    this.currentUserRole = this.authService.getUserRole();
    const profile = this.userProfileService.getProfileData();
    if (profile && profile['Current-User-Language']) {
      this.selectedLanguage = profile['Current-User-Language'];
    }
    console.log('currentUserProfileData from localStorage:', profile);

    // Filter NAV_ITEMS for top-level display
    const topLevelLabels = [
      'Home',
      'My Knowledge',
      'My Health',
      'Find A Service',
      'My Favourites'
    ];
    this.topLevelNavItems = this.navItems.filter(item => topLevelLabels.includes(item.label));
  }

  onLanguageChange(event: Event): void {
    const language = (event.target as HTMLSelectElement).value;
    const profile = this.userProfileService.getProfileData() || { countryOffice: 'Botswana', 'Current-User-Language': 'en' };
    profile['Current-User-Language'] = language;
    this.userProfileService.saveProfileData(profile);
    this.selectedLanguage = language;
  }

  shouldShowMenuItem(item: NavItem): boolean {
    if (!item.roles) {
      return true; // Show if no specific roles are defined
    }
    return item.roles.includes(this.currentUserRole);
  }
}
