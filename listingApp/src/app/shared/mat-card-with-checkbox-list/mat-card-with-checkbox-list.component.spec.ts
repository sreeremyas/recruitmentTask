import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardWithCheckboxListComponent } from './mat-card-with-checkbox-list.component';

describe('MatCardWithCheckboxListComponent', () => {
  let component: MatCardWithCheckboxListComponent;
  let fixture: ComponentFixture<MatCardWithCheckboxListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatCardWithCheckboxListComponent]
    });
    fixture = TestBed.createComponent(MatCardWithCheckboxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
