import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclicExpensesComponent } from './cyclic-expenses.component';

describe('CyclicExpensesComponent', () => {
  let component: CyclicExpensesComponent;
  let fixture: ComponentFixture<CyclicExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CyclicExpensesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CyclicExpensesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
