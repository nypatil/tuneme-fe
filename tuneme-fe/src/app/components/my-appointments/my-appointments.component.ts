import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Appointment {
  id: number;
  name: string;
  date: string;
  time: string;
  center: string;
}

@Component({
  selector: 'app-my-appointments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-appointments.component.html',
  styleUrls: ['./my-appointments.component.css']
})
export class MyAppointmentsComponent implements OnInit {

  appointments: Appointment[] = [
    { id: 1, name: 'Paracetamol Tablet', date: '25-July-25', time: '12:45 AM', center: 'Sahyadri Hospital, Pune' },
    { id: 2, name: 'Ibuprofen Tablet', date: '26-July-25', time: '10:00 AM', center: 'Ruby Hall Clinic, Pune' },
    { id: 3, name: 'Aspirin Tablet', date: '27-July-25', time: '02:30 PM', center: 'Jehangir Hospital, Pune' },
    { id: 4, name: 'Amoxicillin Capsule', date: '28-July-25', time: '08:00 AM', center: 'KEM Hospital, Pune' },
    { id: 5, name: 'Ciprofloxacin Tablet', date: '29-July-25', time: '06:00 PM', center: 'Deenanath Mangeshkar Hospital, Pune' },
    { id: 6, name: 'Metformin Tablet', date: '30-July-25', time: '09:15 AM', center: 'Noble Hospital, Pune' },
    { id: 7, name: 'Atorvastatin Tablet', date: '31-July-25', time: '07:45 PM', center: 'Aditya Birla Memorial Hospital, Pune' },
    { id: 8, name: 'Omeprazole Capsule', date: '01-Aug-25', time: '11:00 AM', center: 'Inlaks and Budhrani Hospital, Pune' }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  deleteAppointment(id: number): void {
    this.appointments = this.appointments.filter(appointment => appointment.id !== id);
  }

  addAppointment(): void {
    this.router.navigate(['/appointment-reminder']);
  }

}