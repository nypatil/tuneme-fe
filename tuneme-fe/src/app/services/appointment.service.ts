import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  getAppointmentCenters(): Observable<string[]> {
    // In a real application, this would fetch data from an API.
    // Here, we return a hardcoded list as an Observable.
    const centers = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];
    return of(centers);
  }
}
