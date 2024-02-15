import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSubmitedComponent } from './feedback-submited.component';

describe('FeedbackSubmitedComponent', () => {
  let component: FeedbackSubmitedComponent;
  let fixture: ComponentFixture<FeedbackSubmitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackSubmitedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackSubmitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
