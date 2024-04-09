import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurentDayComponent } from './curent-day.component';

describe('CurentDayComponent', () => {
  let component: CurentDayComponent;
  let fixture: ComponentFixture<CurentDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurentDayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurentDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
