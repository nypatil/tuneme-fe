import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutContent: any;

  constructor(private aboutService: AboutService) { }

  ngOnInit(): void {
    this.aboutService.getAboutContent().subscribe(data => {
      if (data && data.length > 0) {
        this.aboutContent = data[0];
      }
    });
  }
}
