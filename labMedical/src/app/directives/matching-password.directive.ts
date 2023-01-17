import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors, ValidatorFn } from '@angular/forms';

export function matchingPassword(senha:string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if ((control.value != senha)) {
      return {
        matchingPassword: {
          valid: false,
        },
      };
    } else {
      return null
    }
  }
};

@Directive({
  selector: '[labMMatchingPassword]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: MatchingPasswordDirective,
    multi: true,
  }],
})

export class MatchingPasswordDirective implements Validator {
  @Input() senha:any
  constructor() { }

  public validate(control: AbstractControl): ValidationErrors | null {
    console.log(this.senha)
    return matchingPassword(this.senha)(control);
  }
}
