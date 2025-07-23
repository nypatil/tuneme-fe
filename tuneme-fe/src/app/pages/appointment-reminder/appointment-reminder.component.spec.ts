import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentReminderComponent } from './appointment-reminder.component';

describe('AppointmentReminderComponent', () => {
  let component: AppointmentReminderComponent;
  let fixture: ComponentFixture<AppointmentReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentReminderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
