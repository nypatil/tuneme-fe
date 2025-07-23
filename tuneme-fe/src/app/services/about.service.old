import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = 'https://mhsp-dev2.unfpa.org/tuneme_country_office_listing/BWA';

  constructor(private http: HttpClient) { }

  getAboutContent(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
