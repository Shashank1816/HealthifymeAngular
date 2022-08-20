import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateweightlossComponent } from './activateweightloss.component';

describe('ActivateweightlossComponent', () => {
  let component: ActivateweightlossComponent;
  let fixture: ComponentFixture<ActivateweightlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivateweightlossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivateweightlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
