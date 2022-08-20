import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatemusclebuildComponent } from './activatemusclebuild.component';

describe('ActivatemusclebuildComponent', () => {
  let component: ActivatemusclebuildComponent;
  let fixture: ComponentFixture<ActivatemusclebuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivatemusclebuildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivatemusclebuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
