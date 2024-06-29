import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HospedesComponent } from './components/hospedes/hospedes.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { ReservaComponent } from './components/reserva/reserva.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HospedesComponent,
    HttpClientModule,
    MatTabsModule,
    ReservaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'CheckInHotelWebsite';
}
