import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function customEmailValidator(): ValidatorFn {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return (control: AbstractControl): ValidationErrors | null => {
    const valid = emailRegex.test(control.value);
    return valid ? null : { invalidEmail: { value: control.value } };
  };
}
