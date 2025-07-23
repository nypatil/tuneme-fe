import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKnowledgeDetailsComponent } from './my-knowledge-details.component';

describe('MyKnowledgeDetailsComponent', () => {
  let component: MyKnowledgeDetailsComponent;
  let fixture: ComponentFixture<MyKnowledgeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyKnowledgeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyKnowledgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
