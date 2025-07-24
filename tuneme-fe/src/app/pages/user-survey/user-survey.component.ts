import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SurveyButton {
  caption: string;
}

@Component({
  selector: 'app-user-survey',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-survey.component.html',
  styleUrl: './user-survey.component.css'
})
export class UserSurveyComponent {
  buttons: SurveyButton[] = [];
  showOpinionSurvey: boolean = false;
  selectedOpinion: string = '';
  submittedOpinionSurveyData: any = null;

  showHealthAssessmentSurvey: boolean = false;
  selectedHealthCheckup: string[] = [];
  overallHealthText: string = '';
  submittedHealthAssessmentData: any = null;

  constructor() {
    this.generateButtons();
  }

  generateButtons() {
    this.buttons.push({ caption: 'Your Opinion About Tune Me' });
    this.buttons.push({ caption: 'Health Assessment Survey' });
  }

  onButtonClick(caption: string) {
    // Reset all survey sections
    this.showOpinionSurvey = false;
    this.showHealthAssessmentSurvey = false;
    this.submittedOpinionSurveyData = null;
    this.submittedHealthAssessmentData = null;

    if (caption === 'Your Opinion About Tune Me') {
      this.showOpinionSurvey = true;
    } else if (caption === 'Health Assessment Survey') {
      this.showHealthAssessmentSurvey = true;
    } else {
      console.log(`Button clicked: ${caption}`);
      // Implement logic for other buttons here
    }
  }

  submitOpinionSurvey() {
    if (this.selectedOpinion) {
      this.submittedOpinionSurveyData = {
        question: 'Article and features in this web site are helpful in creating awareness of sextual health in adolescent users by giving them enough knowledge',
        answer: this.selectedOpinion
      };
      console.log('Submitted Opinion Survey Data:', this.submittedOpinionSurveyData);
    } else {
      alert('Please select an option before submitting the opinion survey.');
    }
  }

  submitHealthAssessmentSurvey() {
    if (this.selectedHealthCheckup.length > 0 && this.overallHealthText.trim() !== '') {
      this.submittedHealthAssessmentData = {
        question1: 'How often do you get a health check-up?',
        answer1: this.selectedHealthCheckup,
        question2: 'What do you say about overall health?',
        answer2: this.overallHealthText.trim()
      };
      console.log('Submitted Health Assessment Data:', this.submittedHealthAssessmentData);
    } else {
      alert('Please answer all questions before submitting the health assessment survey.');
    }
  }

  onCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    if (checkbox.checked) {
      this.selectedHealthCheckup.push(checkbox.value);
    } else {
      this.selectedHealthCheckup = this.selectedHealthCheckup.filter(item => item !== checkbox.value);
    }
  }
}
