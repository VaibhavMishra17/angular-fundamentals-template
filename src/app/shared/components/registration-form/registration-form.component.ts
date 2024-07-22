import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { customEmailValidator } from "@app/shared/validators/email.validator";

@Component({
  selector: "app-registration-form",
  templateUrl: "./registration-form.component.html",
  styleUrls: ["./registration-form.component.scss"],
})
export class RegistrationFormComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(6)]],
      email: ["", [Validators.required, customEmailValidator()]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Handle the form submission
      console.log("Form Submitted!", this.registrationForm.value);
    } else {
      this.markFormGroupTouched(this.registrationForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get name() {
    return this.registrationForm.get("name");
  }

  get email() {
    return this.registrationForm.get("email");
  }

  get password() {
    return this.registrationForm.get("password");
  }
}
