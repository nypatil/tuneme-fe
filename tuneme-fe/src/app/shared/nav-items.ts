import { Type } from '@angular/core';
import { HomeComponent } from '../pages/home/home.component';
import { MyKnowledgeComponent } from '../pages/my-knowledge/my-knowledge.component';
import { FindAServiceComponent } from '../pages/find-a-service/find-a-service.component';
import { MyHealthComponent } from '../pages/my-health/my-health.component';
import { YourTipsComponent } from '../pages/your-tips/your-tips.component';
import { MyFavouritesComponent } from '../pages/my-favourites/my-favourites.component';
import { AboutComponent } from '../pages/about/about.component';
import { DynamicContentComponent } from '../components/dynamic-content/dynamic-content.component';
import { UpdateProfileComponent } from '../pages/update-profile/update-profile.component';
import { SettingsComponent } from '../pages/settings/settings.component';
import { SecurityComponent } from '../pages/security/security.component';

export interface NavItem {
  label: string;
  route?: string; // Make route optional for parent items with children
  icon?: string; // Optional for header, required for left nav
  roles?: string[]; // Optional: roles that can see this item
  component?: Type<any>; // Component to associate with the route
  children?: NavItem[]; // For nested menus
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', route: '/home', icon: 'fas fa-home', component: HomeComponent },
  { label: 'My Knowledge', route: '/my-knowledge', icon: 'fas fa-book', roles: ['user', 'admin'], component: DynamicContentComponent },
  { label: 'My Health', route: '/my-health', icon: 'fas fa-heartbeat', roles: ['user', 'admin'], component: MyHealthComponent },
  { label: 'Find A Service', route: '/find-a-service', icon: 'fas fa-search', roles: ['user', 'admin'], component: FindAServiceComponent },
  { label: 'Your Tips', route: '/your-tips', icon: 'fas fa-lightbulb', roles: ['user', 'admin'], component: YourTipsComponent },
  { label: 'My Favourites', route: '/my-favourites', icon: 'fas fa-star', roles: ['user', 'admin'], component: MyFavouritesComponent },
  { label: 'Update Profile', route: '/update-profile', icon: 'fas fa-user-edit', roles: ['user', 'admin'], component: UpdateProfileComponent },
  { label: 'Settings', icon: 'fas fa-cog', roles: ['admin'], // Example: only admin can see settings
    children: [
      { label: 'Profile', route: '/settings/profile', icon: 'fas fa-id-card', component: UpdateProfileComponent }, // Re-using UpdateProfileComponent for simplicity
      { label: 'Security', route: '/settings/security', icon: 'fas fa-shield-alt', component: SecurityComponent }
    ]
  },
  { label: 'About', route: '/about', icon: 'fas fa-info-circle', component: AboutComponent },
  { label: 'Help', route: '/help', icon: 'fas fa-question-circle', component: HomeComponent } // Placeholder for Help
];