import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface MedicationRecord {
  id: number;
  medication: string;
  power: string;
  dose: string;
  time: string;
  instructions: string;
}

@Component({
  selector: 'app-scheduled-medication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scheduled-medication.component.html',
  styleUrl: './scheduled-medication.component.css'
})
export class ScheduledMedicationComponent implements OnInit {
  medicationRecords: MedicationRecord[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadSampleData();
  }

  loadSampleData(): void {
    this.medicationRecords = [
      {
        id: 1,
        medication: 'Paracetamol Tablet',
        power: '10 MG',
        dose: 'Daily',
        time: '07:30 PM',
        instructions: 'Strictly after food'
      },
      {
        id: 2,
        medication: 'Amoxicillin Capsule',
        power: '250 MG',
        dose: 'Twice a day',
        time: '08:00 AM, 08:00 PM',
        instructions: 'With food'
      },
      {
        id: 3,
        medication: 'Ibuprofen',
        power: '200 MG',
        dose: 'As needed',
        time: 'Any time',
        instructions: 'Do not exceed 3 doses in 24 hours'
      },
      {
        id: 4,
        medication: 'Lisinopril',
        power: '5 MG',
        dose: 'Daily',
        time: '09:00 AM',
        instructions: 'Take at the same time each day'
      },
      {
        id: 5,
        medication: 'Metformin',
        power: '500 MG',
        dose: 'Twice a day',
        time: 'After breakfast, after dinner',
        instructions: 'Take with meals'
      },
      {
        id: 6,
        medication: 'Atorvastatin',
        power: '20 MG',
        dose: 'Daily',
        time: '09:00 PM',
        instructions: 'Take at bedtime'
      },
      {
        id: 7,
        medication: 'Omeprazole',
        power: '20 MG',
        dose: 'Daily',
        time: '07:00 AM',
        instructions: 'Before breakfast'
      },
      {
        id: 8,
        medication: 'Cetirizine',
        power: '10 MG',
        dose: 'Daily',
        time: '10:00 AM',
        instructions: 'For allergies'
      }
    ];
  }

  deleteRecord(id: number): void {
    this.medicationRecords = this.medicationRecords.filter(record => record.id !== id);
  }

  addNewRecord(): void {
    this.router.navigate(['/medicine-reminder']);
  }
}