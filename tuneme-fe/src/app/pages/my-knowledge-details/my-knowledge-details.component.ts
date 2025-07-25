import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { KnowledgeMenuItem } from '../../services/my-knowledge.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Added imports

interface Comment {
  userName: string;
  commentText: string;
  dateTime: Date;
}

@Component({
  selector: 'app-my-knowledge-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Added ReactiveFormsModule
  templateUrl: './my-knowledge-details.component.html',
  styleUrls: ['./my-knowledge-details.component.css']
})
export class MyKnowledgeDetailsComponent implements OnInit {
  item: KnowledgeMenuItem | undefined;
  commentForm: FormGroup; // Declare commentForm
  commentSubmitted: boolean = false;
  previousComments: Comment[] = []; // Initialize with sample data

  constructor(private router: Router, private location: Location, private fb: FormBuilder) { // Inject FormBuilder
    const navigation = this.router.getCurrentNavigation();
    this.item = navigation?.extras.state?.['item'];

    // Initialize commentForm in the constructor
    this.commentForm = this.fb.group({
      comment: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(200)]]
    });

    // Sample previous comments
    this.previousComments = [
      { userName: 'Alice', commentText: 'Great article, very informative!', dateTime: new Date('2025-07-20T10:00:00') },
      { userName: 'Bob', commentText: 'I learned a lot from this. Thanks!', dateTime: new Date('2025-07-21T14:30:00') },
      { userName: 'Charlie', commentText: 'Very well written and easy to understand.', dateTime: new Date('2025-07-22T09:15:00') },
      { userName: 'Diana', commentText: 'This really helped me. Highly recommend!', dateTime: new Date('2025-07-23T11:00:00') },
      { userName: 'Eve', commentText: 'Insightful content, thank you for sharing.', dateTime: new Date('2025-07-23T16:45:00') }
    ];
  }

  ngOnInit(): void {
    if (!this.item) {
      // Handle case where item is not passed
    }
  }

  goBack(): void {
    this.location.back();
  }

  submitComment(isAnonymous: boolean): void {
    this.commentForm.markAllAsTouched(); // Mark all controls as touched to show validation errors

    if (this.commentForm.valid) {
      const newComment: Comment = {
        userName: isAnonymous ? 'Anonymous User' : 'Current User', // Set user name based on button clicked
        commentText: this.commentForm.value.comment,
        dateTime: new Date()
      };
      this.previousComments.unshift(newComment); // Add new comment to the beginning of the array
      this.commentSubmitted = true;
      this.commentForm.reset(); // Reset the form

      // Hide the submission message after a few seconds
      setTimeout(() => {
        this.commentSubmitted = false;
      }, 5000);
    }
  }
}
