import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BushireReceiptComponent } from './bushire-receipt.component';

describe('BushireReceiptComponent', () => {
  let component: BushireReceiptComponent;
  let fixture: ComponentFixture<BushireReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BushireReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BushireReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
