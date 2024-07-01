import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhesReservaComponent } from './detalhes-reserva.component';

describe('DetalhesReservaComponent', () => {
  let component: DetalhesReservaComponent;
  let fixture: ComponentFixture<DetalhesReservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalhesReservaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalhesReservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
