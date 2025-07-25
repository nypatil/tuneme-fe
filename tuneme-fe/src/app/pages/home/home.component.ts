import { Component } from '@angular/core';
import { DownloadSectionComponent } from '../../components/download-section/download-section.component';
import { SliderComponent } from '../../components/slider/slider.component';
import { ScheduledMedicationComponent } from '../../components/scheduled-medication/scheduled-medication.component';
import { MyAppointmentsComponent } from '../../components/my-appointments/my-appointments.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DownloadSectionComponent, SliderComponent, ScheduledMedicationComponent, MyAppointmentsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}