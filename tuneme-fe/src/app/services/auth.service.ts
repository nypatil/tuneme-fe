import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserRole: string = 'admin'; // Example: 'admin', 'user', 'guest'

  constructor() { }

  getUserRole(): string {
    return this.currentUserRole;
  }

  // You can add methods to change role for testing purposes
  setRole(role: string) {
    this.currentUserRole = role;
  }
}
