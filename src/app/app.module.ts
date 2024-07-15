import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { InfoComponent } from "./shared/components/info/info.component";

import { CoursesModule } from "./features/courses/courses.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, CoursesModule, SharedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
