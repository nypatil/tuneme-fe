import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

interface ContentItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [CommonModule, HttpClientModule, RouterLink],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.css'
})
export class DynamicContentComponent implements OnInit {
  contentItems: ContentItem[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<ContentItem[]>('assets/content.json').subscribe({
      next: (data) => {
        this.contentItems = data;
      },
      error: (err) => {
        console.error('Error fetching content:', err);
      }
    });
  }
}