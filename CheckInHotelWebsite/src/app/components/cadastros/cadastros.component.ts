import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ReservaComponent } from '../reserva/reserva.component';
import { HospedesComponent } from '../hospedes/hospedes.component';

@Component({
  selector: 'app-cadastros',
  standalone: true,
  imports: [
    MatTabsModule,
    ReservaComponent,
    HospedesComponent
  ],
  templateUrl: './cadastros.component.html',
  styleUrl: './cadastros.component.css'
})
export class CadastrosComponent {

}
