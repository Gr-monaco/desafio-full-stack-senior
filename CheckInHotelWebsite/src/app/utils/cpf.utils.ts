import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { cpf } from "cpf-cnpj-validator";

export function validaCPF(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const cpfSemCaracteresEspeciais : string  = cpf.strip(control.value);
    const cpfValido : boolean = cpf.isValid(cpfSemCaracteresEspeciais)
    return !cpfValido ? { cpfInvalido: "CPF está inválido" } : null;
  }
}