import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NAV_ITEMS, NavItem } from '../../shared/nav-items';

@Component({
  selector: 'app-left-nav-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './left-nav-menu.component.html',
  styleUrl: './left-nav-menu.component.css'
})
export class LeftNavMenuComponent implements OnInit {
  menuItems: NavItem[] = NAV_ITEMS;
  isMobileMenuOpen = false;
  currentUserRole: string = '';
  expandedItems: { [key: string]: boolean } = {}; // To track expanded state of parent items

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.currentUserRole = this.authService.getUserRole();
    // Initialize expanded state based on active route
    this.menuItems.forEach(item => {
      if (item.children) {
        this.expandedItems[item.label] = this.isAnyChildActive(item.children);
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  shouldShowMenuItem(item: NavItem): boolean {
    if (!item.roles) {
      return true;
    }
    return item.roles.includes(this.currentUserRole);
  }

  toggleSubMenu(item: NavItem) {
    if (item.children) {
      this.expandedItems[item.label] = !this.expandedItems[item.label];
    }
  }

  isSubMenuExpanded(item: NavItem): boolean {
    return this.expandedItems[item.label] || false;
  }

  // Check if the current route matches the menu item's route or any of its children's routes
  isActive(route: string): boolean {
    return this.router.url === route;
  }

  isAnyChildActive(children: NavItem[]): boolean {
    return children.some(child => this.router.url.startsWith(child.route || ''));
  }
}
