import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyplancardComponent } from './buyplancard.component';

describe('BuyplancardComponent', () => {
  let component: BuyplancardComponent;
  let fixture: ComponentFixture<BuyplancardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyplancardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyplancardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
