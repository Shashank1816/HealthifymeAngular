import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeighttrackerComponent } from './weighttracker.component';

describe('WeighttrackerComponent', () => {
  let component: WeighttrackerComponent;
  let fixture: ComponentFixture<WeighttrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeighttrackerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeighttrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
