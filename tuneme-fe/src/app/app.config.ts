import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NAV_ITEMS, NavItem } from './shared/nav-items';

// Function to flatten NAV_ITEMS into a single array of Routes
function createRoutes(items: NavItem[], parentPath: string = ''): Routes {
  let routes: Routes = [];
  items.forEach(item => {
    const fullPath = parentPath + item.route?.substring(1) || ''; // Remove leading slash if present
    if (item.component) {
      routes.push({
        path: fullPath,
        component: item.component
      });
    }
    if (item.children) {
      routes = routes.concat(createRoutes(item.children, fullPath + '/'));
    }
  });
  return routes;
}

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  ...createRoutes(NAV_ITEMS),
  { path: '**', redirectTo: 'home' } // Wildcard route for a 404-like behavior
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient()
  ]
};