import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ServiceItem {
  title: string;
}

@Component({
  selector: 'app-find-a-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './find-a-service.component.html',
  styleUrls: ['./find-a-service.component.css']
})
export class FindAServiceComponent implements OnInit {
  serviceItems: ServiceItem[] = [
    { title: 'TB Diagnosis' },
    { title: 'Emergency Obstetric Care' },
    { title: 'Mother Waiting Shelter' },
    { title: 'Male Circumcision' },
    { title: 'Sexual Health Advice' },
    { title: 'Contraceptive Services' },
    { title: 'HIV Counselling & Testing' },
    { title: 'Prevention of Mother to Child Transmission' },
    { title: 'Delivery Ward' }
  ];

  constructor() { }

  ngOnInit(): void { }
}