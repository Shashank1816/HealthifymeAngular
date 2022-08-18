import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveplancardComponent } from './activeplancard.component';

describe('ActiveplancardComponent', () => {
  let component: ActiveplancardComponent;
  let fixture: ComponentFixture<ActiveplancardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveplancardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveplancardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
