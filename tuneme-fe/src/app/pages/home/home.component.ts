import { Component } from '@angular/core';
import { DownloadSectionComponent } from '../../components/download-section/download-section.component';
import { SliderComponent } from '../../components/slider/slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DownloadSectionComponent, SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}