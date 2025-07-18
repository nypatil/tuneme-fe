import { Component } from '@angular/core';
import { DownloadSectionComponent } from '../../components/download-section/download-section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DownloadSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}