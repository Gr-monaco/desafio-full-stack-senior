import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HospedeService } from './hospede.service';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-hospedes',
  standalone: true,
  imports: [
    MatSelectModule,
    MatInputModule, 
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
  ],
  templateUrl: './hospedes.component.html',
  styleUrl: './hospedes.component.css'
})
export class HospedesComponent {

  constructor(private hospedeService: HospedeService){}
  
  hospedeForm = new FormGroup({
    nome: new FormControl(''),
    documento: new FormControl(''),
    telefone: new FormControl('')
  })

  onSubmit(){
    console.log(this.hospedeForm.value);
    console.log(this.hospedeService.cadastraCliente(JSON.stringify(this.hospedeForm.value)))
  }
}
