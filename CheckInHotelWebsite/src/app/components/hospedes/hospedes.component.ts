import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AbstractControl, FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HospedeService } from '../../services/hospede/hospede.service';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HospedeModel } from '../../models/hospede.model';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { validaCPF } from '../../utils/cpf.utils';

@Component({
  selector: 'app-hospedes',
  standalone: true,
  imports: [
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

  constructor(private hospedeService: HospedeService){
  }
  
  hospedeForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    documento: new FormControl('', [Validators.required, validaCPF()]),
    telefone: new FormControl('', Validators.required)
  })

  onSubmit(formDirective: FormGroupDirective){
    if(this.hospedeForm.invalid){
      console.log(this.hospedeForm);
      return;
    }
    //https://juri.dev/blog/2019/02/display-server-side-validation-errors-with-angular/
    let observable: Observable<Object> =
    this.hospedeService.cadastraCliente(this.hospedeForm.value as HospedeModel)
    observable.subscribe({ error: (err) => {
      if(err instanceof HttpErrorResponse){
        this.handleErrors(err)
      }
    }, complete: () => {
      //https://stackoverflow.com/questions/53472222/angular-validation-messages-appears-after-reset-form
      this.hospedeForm.reset()
      formDirective.resetForm();
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

  get documento(){
    return this.hospedeForm.get('documento');
  }

  get nome(){
    return this.hospedeForm.get('nome');
  }

  get telefone(){
    return this.hospedeForm.get('telefone');
  }

}
