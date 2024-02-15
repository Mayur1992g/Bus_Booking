import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDoneComponent } from './search-done.component';

describe('SearchDoneComponent', () => {
  let component: SearchDoneComponent;
  let fixture: ComponentFixture<SearchDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchDoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
