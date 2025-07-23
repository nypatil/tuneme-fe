import { Injectable } from '@angular/core';

export interface UserProfile {
  countryOffice: string;
  'Current-User-Language': string;
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  private readonly storageKey = 'currentUserProfileData';

  constructor() { }

  saveProfileData(profile: UserProfile): void {
    localStorage.setItem(this.storageKey, JSON.stringify(profile));
  }

  getProfileData(): UserProfile | null {
    const data = localStorage.getItem(this.storageKey);
    if (data) {
      return JSON.parse(data) as UserProfile;
    }
    return null;
  }
}
