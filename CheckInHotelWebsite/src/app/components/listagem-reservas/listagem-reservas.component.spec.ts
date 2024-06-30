import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemReservasComponent } from './listagem-reservas.component';

describe('ListagemReservasComponent', () => {
  let component: ListagemReservasComponent;
  let fixture: ComponentFixture<ListagemReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemReservasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
