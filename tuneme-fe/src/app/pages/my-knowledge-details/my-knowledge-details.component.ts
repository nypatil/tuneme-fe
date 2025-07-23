import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { KnowledgeMenuItem } from '../../services/my-knowledge.service';

@Component({
  selector: 'app-my-knowledge-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-knowledge-details.component.html',
  styleUrls: ['./my-knowledge-details.component.css']
})
export class MyKnowledgeDetailsComponent implements OnInit {
  item: KnowledgeMenuItem | undefined;

  constructor(private router: Router, private location: Location) {
    const navigation = this.router.getCurrentNavigation();
    this.item = navigation?.extras.state?.['item'];
  }

  ngOnInit(): void {
    if (!this.item) {
      // Handle case where item is not passed
    }
  }

  goBack(): void {
    this.location.back();
  }
}
