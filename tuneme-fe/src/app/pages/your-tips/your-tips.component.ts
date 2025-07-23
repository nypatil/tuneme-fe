import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TipItem {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-your-tips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './your-tips.component.html',
  styleUrls: ['./your-tips.component.css']
})
export class YourTipsComponent implements OnInit {
  tipItems: TipItem[] = [
    { icon: 'assets/icon-tips-recent.png', title: 'Recent Tips', description: 'See recently published tips' },
    { icon: 'assets/icon-tips-popular.png', title: 'Popular Tips', description: 'See most liked advices' },
    { icon: 'assets/icon-submit-tip.png', title: 'Submit a Tip!', description: 'Click here to share your advice with others' }
  ];

  constructor() { }

  ngOnInit(): void { }
}