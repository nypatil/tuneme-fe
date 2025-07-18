import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NAV_ITEMS, NavItem } from '../../shared/nav-items';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule], // Add RouterLinkActive and CommonModule
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  navItems: NavItem[] = NAV_ITEMS;
  currentUserRole: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUserRole = this.authService.getUserRole();
  }

  shouldShowMenuItem(item: NavItem): boolean {
    if (!item.roles) {
      return true; // Show if no specific roles are defined
    }
    return item.roles.includes(this.currentUserRole);
  }
}
