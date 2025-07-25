import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledMedicationComponent } from './scheduled-medication.component';

describe('ScheduledMedicationComponent', () => {
  let component: ScheduledMedicationComponent;
  let fixture: ComponentFixture<ScheduledMedicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledMedicationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduledMedicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
