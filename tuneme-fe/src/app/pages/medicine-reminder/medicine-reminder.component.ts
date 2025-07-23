import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-medicine-reminder',
  templateUrl: './medicine-reminder.component.html',
  styleUrls: ['./medicine-reminder.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class MedicineReminderComponent implements OnInit {
  medicineReminderForm!: FormGroup;
  submittedJson: string | null = null;
  scheduleOptions = ['Daily', 'Weekly', 'Monthly', 'As Needed'];
  repeatOptions = [1, 2, 3, 4, 5]; // Times per day

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.medicineReminderForm = this.fb.group({
      medicine: this.fb.group({
        name: ['', Validators.required],
        power: ['', Validators.required],
        dose: ['', Validators.required]
      }),
      reminder: this.fb.group({
        schedule: ['Daily', Validators.required],
        startDate: ['', Validators.required],
        endDate: ['', Validators.required],
        repeatCount: [1, Validators.required],
        alarmTime: ['', Validators.required],
        withFood: [false],
        instructions: ['']
      })
    });
  }

  onSubmit(): void {
    if (this.medicineReminderForm.valid) {
      this.submittedJson = JSON.stringify(this.medicineReminderForm.value, null, 2);
      console.log('Medicine Reminder Submitted:', this.medicineReminderForm.value);
    } else {
      this.medicineReminderForm.markAllAsTouched();
    }
  }
}