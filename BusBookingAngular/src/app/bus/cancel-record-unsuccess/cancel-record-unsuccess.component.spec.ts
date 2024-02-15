import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRecordUnsuccessComponent } from './cancel-record-unsuccess.component';

describe('CancelRecordUnsuccessComponent', () => {
  let component: CancelRecordUnsuccessComponent;
  let fixture: ComponentFixture<CancelRecordUnsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelRecordUnsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelRecordUnsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
