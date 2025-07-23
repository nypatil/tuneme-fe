import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class UserRegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  submittedJson: string | null = null;

  interests = [
    { id: 'learn', label: 'Learn more about sexual and reproductive health topics.' },
    { id: 'clinic', label: 'Get help finding a clinic.' },
    { id: 'tips', label: 'Share Tips.' },
    { id: 'other', label: 'Something else.' }
  ];

  educationLevels = ['None', 'Primary', 'Secondary', 'College / University', 'Professional Degree'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      userName: ['', Validators.required],
      interests: this.fb.array([], Validators.required),
      educationLevel: ['', Validators.required]
    });
  }

  onInterestChange(event: any): void {
    const interestsArray = this.registrationForm.get('interests') as FormArray;

    if (event.target.checked) {
      interestsArray.push(new FormControl(event.target.value));
    } else {
      const index = interestsArray.controls.findIndex(x => x.value === event.target.value);
      interestsArray.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.submittedJson = JSON.stringify(this.registrationForm.value, null, 2);
      console.log('Registration Form Submitted:', this.registrationForm.value);
    } else {
      this.registrationForm.markAllAsTouched();
    }
  }
}