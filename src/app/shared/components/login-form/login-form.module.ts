import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '@shared/shared.module';
import { LoginFormComponent } from '@shared/components';
import { LoginFormRoutingModule } from '@shared/components/login-form/login-form-routing.module';

@NgModule({
    declarations: [LoginFormComponent],
    imports: [CommonModule, FontAwesomeModule, FormsModule, SharedModule, LoginFormRoutingModule],
    exports: [LoginFormComponent],
})
export class LoginFormModule {
}
