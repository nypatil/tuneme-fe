import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAServiceComponent } from './find-a-service.component';

describe('FindAServiceComponent', () => {
  let component: FindAServiceComponent;
  let fixture: ComponentFixture<FindAServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindAServiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindAServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
