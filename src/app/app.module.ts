import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import {
  FontAwesomeModule,
  FaIconLibrary,
} from "@fortawesome/angular-fontawesome";
import { CoursesModule } from "./features/courses/courses.module";
import { LoginFormComponent } from "./shared/components/login-form/login-form.component";
import { SharedModule } from "./shared/shared.module";
import {
  faSignInAlt,
  faSignOutAlt,
  faPen,
  faTrash,
  faPlay,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationFormComponent } from "./shared/components/registration-form/registration-form.component";
import { CourseFormComponent } from "./shared/components/course-form/course-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    RegistrationFormComponent,
    CourseFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CoursesModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSignInAlt, faSignOutAlt, faPen, faTrash, faPlay, faPlus);
  }
}
