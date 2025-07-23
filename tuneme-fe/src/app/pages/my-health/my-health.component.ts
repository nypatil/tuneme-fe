import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HealthItem {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-my-health',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-health.component.html',
  styleUrls: ['./my-health.component.css']
})
export class MyHealthComponent implements OnInit {
  healthItems: HealthItem[] = [
    { icon: 'assets/icon-service.png', title: 'Period Tracker' },
    { icon: 'assets/icon-service.png', title: 'Medicine Reminder' },
    { icon: 'assets/icon-service.png', title: 'Appointment Reminder' }
  ];

  constructor() { }

  ngOnInit(): void { }
}