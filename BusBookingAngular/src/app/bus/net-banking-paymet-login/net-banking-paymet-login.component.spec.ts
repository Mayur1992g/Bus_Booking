import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetBankingPaymetLoginComponent } from './net-banking-paymet-login.component';

describe('NetBankingPaymetLoginComponent', () => {
  let component: NetBankingPaymetLoginComponent;
  let fixture: ComponentFixture<NetBankingPaymetLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NetBankingPaymetLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetBankingPaymetLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
