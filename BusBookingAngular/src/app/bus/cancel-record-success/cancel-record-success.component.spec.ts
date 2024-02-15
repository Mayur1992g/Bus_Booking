import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRecordSuccessComponent } from './cancel-record-success.component';

describe('CancelRecordSuccessComponent', () => {
  let component: CancelRecordSuccessComponent;
  let fixture: ComponentFixture<CancelRecordSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelRecordSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelRecordSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
