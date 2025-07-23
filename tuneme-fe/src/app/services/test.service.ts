import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  constructor() { }

  getTestData(): string {
    return 'Hello from TestService!';
  }
}
