import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPaymetComponent } from './login-paymet.component';

describe('LoginPaymetComponent', () => {
  let component: LoginPaymetComponent;
  let fixture: ComponentFixture<LoginPaymetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPaymetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPaymetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
