import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateweightgainComponent } from './activateweightgain.component';

describe('ActivateweightgainComponent', () => {
  let component: ActivateweightgainComponent;
  let fixture: ComponentFixture<ActivateweightgainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateweightgainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateweightgainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
