import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserProfileService } from '../../services/user-profile.service';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm: FormGroup;
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userProfileService: UserProfileService
  ) {
    this.updateProfileForm = this.fb.group({
      countryOffice: ['Botswana', Validators.required],
      'Current-User-Language': ['en', Validators.required]
    });
  }

  ngOnInit(): void {
    const savedProfile = this.userProfileService.getProfileData();
    if (savedProfile) {
      this.updateProfileForm.patchValue(savedProfile);
    }
  }

  onSubmit() {
    if (this.updateProfileForm.valid) {
      this.userProfileService.saveProfileData(this.updateProfileForm.value);
      this.successMessage = 'Profile data saved successfully';
      setTimeout(() => this.successMessage = '', 3000); // Hide message after 3 seconds
    }
  }
}
