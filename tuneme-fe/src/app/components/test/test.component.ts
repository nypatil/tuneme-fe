import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from '../../services/test.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: '<p>{{ message }}</p>',
  styleUrl: './test.component.css'
})
export class TestComponent implements OnInit {
  message: string = '';

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.message = this.testService.getTestData();
  }
}
