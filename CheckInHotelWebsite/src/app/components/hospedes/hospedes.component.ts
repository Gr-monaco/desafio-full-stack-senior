import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HospedeService } from '../../services/hospede/hospede.service';
import { HttpClientModule, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HospedeModel } from '../../models/hospede.model';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

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
    CommonModule,
    NgxMaskDirective
  ],
  templateUrl: './hospedes.component.html',
  styleUrl: './hospedes.component.css',
  providers: [
    provideNgxMask()
  ]
})
export class HospedesComponent {

  constructor(private hospedeService: HospedeService){}
  
  hospedeForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    documento: new FormControl(''),
    telefone: new FormControl('')
  })

  onSubmit(){
    console.log(this.hospedeForm.value);

    //https://juri.dev/blog/2019/02/display-server-side-validation-errors-with-angular/
    let observable: Observable<Object> =
    this.hospedeService.cadastraCliente(this.hospedeForm.value as HospedeModel)
    observable.subscribe({error: (err) => {
      if(err instanceof HttpErrorResponse){
        this.handleErrors(err)
      }
    }})
  }

  private handleErrors(err: HttpErrorResponse): void {
    if (err.status === 409){
      const errorMessages = new Map<string, string>(Object.entries(err.error));
      errorMessages.forEach((message, prop) => {
        const formControl = this.hospedeForm.get(prop);
        if(formControl){
          formControl.setErrors({serverError: message})
        }
      })
    }
  }
}
