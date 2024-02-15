import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPaymentLoginComponent } from './credit-payment-login.component';

describe('CreditPaymentLoginComponent', () => {
  let component: CreditPaymentLoginComponent;
  let fixture: ComponentFixture<CreditPaymentLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditPaymentLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditPaymentLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
