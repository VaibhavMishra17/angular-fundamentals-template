import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./components/button/button.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { InfoComponent } from "./components/info/info.component";
import { DurationPipe } from "./pipes/duration.pipe";
import { EmailValidatorDirective } from "./directives/email.directive";
import { CustomDatePipe } from "./pipes/custom-date.pipe";
import { SearchComponent } from "./components/search/search.component";
import { FormsModule } from "@angular/forms";
import { TogglePasswordDirective } from "./directives/toggle-password.directive";

@NgModule({
  declarations: [
    ButtonComponent,
    InfoComponent,
    EmailValidatorDirective,
    DurationPipe,
    CustomDatePipe,
    SearchComponent,
    TogglePasswordDirective,
  ],
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  exports: [
    ButtonComponent,
    FontAwesomeModule,
    InfoComponent,
    EmailValidatorDirective,
    DurationPipe,
    CustomDatePipe,
    SearchComponent,
    TogglePasswordDirective,
  ],
})
export class SharedModule {}
