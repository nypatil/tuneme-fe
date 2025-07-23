import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { AppointmentService } from '../../services/appointment.service';

@Component({
  selector: 'app-appointment-reminder',
  templateUrl: './appointment-reminder.component.html',
  styleUrls: ['./appointment-reminder.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class AppointmentReminderComponent implements OnInit {
  appointmentForm!: FormGroup;
  centerList$!: Observable<string[]>;
  minDate: string;
  submittedJson: string | null = null;

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.minDate = this.getMinDate();
  }

  ngOnInit(): void {
    this.initializeForm();
    this.loadAppointmentCenters();
  }

  private initializeForm(): void {
    this.appointmentForm = this.fb.group({
      appointmentName: ['', [Validators.required, Validators.minLength(3)]],
      appointmentCenter: ['', Validators.required],
      appointmentDate: ['', Validators.required],
      appointmentTime: ['', Validators.required]
    });
  }

  private loadAppointmentCenters(): void {
    this.centerList$ = this.appointmentService.getAppointmentCenters();
  }

  private getMinDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  onSubmit(): void {
    if (this.appointmentForm.valid) {
      this.processFormSubmission(this.appointmentForm.value);
    } else {
      this.appointmentForm.markAllAsTouched();
    }
  }

  private processFormSubmission(formData: any): void {
    this.submittedJson = JSON.stringify(formData, null, 2);
    console.log('Form Submitted:', formData);
    // In a real app, you would send this data to a backend service.
  }
}