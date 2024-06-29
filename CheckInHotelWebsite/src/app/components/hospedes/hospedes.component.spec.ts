import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospedesComponent } from './HospedesComponent';

describe('HospedesComponent', () => {
  let component: HospedesComponent;
  let fixture: ComponentFixture<HospedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospedesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HospedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
