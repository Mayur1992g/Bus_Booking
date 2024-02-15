import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusHireSuccessComponent } from './bus-hire-success.component';

describe('BusHireSuccessComponent', () => {
  let component: BusHireSuccessComponent;
  let fixture: ComponentFixture<BusHireSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusHireSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusHireSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
