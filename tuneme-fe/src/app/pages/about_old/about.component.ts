import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: '<p>About page works!</p>',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    // Keep empty for now
  }
}