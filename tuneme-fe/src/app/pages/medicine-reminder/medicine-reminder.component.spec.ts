import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineReminderComponent } from './medicine-reminder.component';

describe('MedicineReminderComponent', () => {
  let component: MedicineReminderComponent;
  let fixture: ComponentFixture<MedicineReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicineReminderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
