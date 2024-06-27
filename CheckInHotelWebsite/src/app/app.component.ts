import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HospedesComponent } from './components/hospedes/hospedes.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HospedesComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CheckInHotelWebsite';
}
