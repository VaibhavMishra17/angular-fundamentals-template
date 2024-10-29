import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import {
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    CourseCardComponent,
    CourseFormComponent
} from "./components";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { EmailValidatorDirective } from './directives/email.directive';
import { DurationPipe } from './pipes/duration.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { ToggleDirective } from './pipes/toggle.pipe';

const components = [
    HeaderComponent,
    ButtonComponent,
    InfoComponent,
    SearchComponent,
    ModalComponent,
    CourseCardComponent,
    CourseFormComponent
];

@NgModule({
    declarations: [components, EmailValidatorDirective, DurationPipe, CustomDatePipe, ToggleDirective],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [components, EmailValidatorDirective, DurationPipe, CustomDatePipe, ToggleDirective],
})
export class SharedModule {
}
