import { Directive } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: "[appEmailValidator]",
})
export class EmailValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const isValid = emailPattern.test(control.value);

    return isValid ? null : { invalidEmail: true };
  }
}
