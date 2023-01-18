import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors, ValidatorFn } from '@angular/forms';
import { TabelaUsuarioService } from 'src/app/services/tabela-usuario.service';

export function availableEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const usuarios = TabelaUsuarioService.prototype.buscar()
    let check: boolean = false
    usuarios.forEach((usuario) => {
      if (control.value === usuario.email) {
        check = true
      }
    })
    if(check){
      return {
        availableEmail: {
          valid: false,
        },
      }
    }else{
      return null
    }
  };
}

@Directive({
  selector: '[labMAvailableEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: AvailableEmailDirective,
    multi: true,
  }],
})

export class AvailableEmailDirective implements Validator {

  constructor() { }
  public validate(control: AbstractControl): ValidationErrors | null {
    return availableEmail()(control);
  }
}
