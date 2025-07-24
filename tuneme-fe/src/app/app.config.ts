import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { NAV_ITEMS, NavItem } from './shared/nav-items';
import { TestComponent } from './components/test/test.component';
import { AboutService } from './services/about.service';
import { AboutComponent } from './pages/about/about.component';
import { MyKnowledgeDetailsComponent } from './pages/my-knowledge-details/my-knowledge-details.component';
import { AppointmentReminderComponent } from './pages/appointment-reminder/appointment-reminder.component';
import { AppointmentService } from './services/appointment.service';
import { MedicineReminderComponent } from './pages/medicine-reminder/medicine-reminder.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserSurveyComponent } from './pages/user-survey/user-survey.component';

// Function to flatten NAV_ITEMS into a single array of Routes
function createRoutes(items: NavItem[], parentPath: string = ''): Routes {
  let routes: Routes = [];
  items.forEach(item => {
    const fullPath = item.route ? item.route.substring(1) : ''; // Remove leading slash
    if (item.component) {
      routes.push({
        path: fullPath,
        component: item.component,
        title: item.label // Add title here
      });
    }
    if (item.children) {
      // Pass the parent path to children
      const parentRoute = item.route ? item.route : '';
      routes = routes.concat(createRoutes(item.children, parentRoute));
    }
  });
  return routes;
}

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'test', component: TestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'appointment-reminder', component: AppointmentReminderComponent },
  { path: 'medicine-reminder', component: MedicineReminderComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'my-knowledge-details', component: MyKnowledgeDetailsComponent },
  { path: 'user-survey', component: UserSurveyComponent },
  ...createRoutes(NAV_ITEMS),
  { path: '**', redirectTo: 'home' } // Wildcard route for a 404-like behavior
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(),
    AboutService,
    AppointmentService
  ]
};