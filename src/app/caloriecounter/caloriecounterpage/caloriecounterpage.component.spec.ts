import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaloriecounterpageComponent } from './caloriecounterpage.component';

describe('CaloriecounterpageComponent', () => {
  let component: CaloriecounterpageComponent;
  let fixture: ComponentFixture<CaloriecounterpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaloriecounterpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaloriecounterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
