import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxlistComponent } from './checkboxlist.component';

describe('CheckboxlistComponent', () => {
  let component: CheckboxlistComponent;
  let fixture: ComponentFixture<CheckboxlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckboxlistComponent]
    });
    fixture = TestBed.createComponent(CheckboxlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
