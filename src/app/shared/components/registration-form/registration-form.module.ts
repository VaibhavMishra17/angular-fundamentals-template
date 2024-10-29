import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { RegistrationFormComponent } from '@shared/components';
import { RegistrationFormRoutingModule } from '@shared/components/registration-form/registration-form-routing.module';

@NgModule({
    declarations: [RegistrationFormComponent],
    imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule, SharedModule, RegistrationFormRoutingModule],
    exports: [RegistrationFormComponent],
})
export class RegistrationFormModule {
}
