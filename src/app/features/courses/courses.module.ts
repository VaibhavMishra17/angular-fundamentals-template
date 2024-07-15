import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CoursesComponent } from "./courses.component";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { CourseCardComponent } from "src/app/shared/components/course-card/course-card.component";
import { CourseInfoComponent } from "../course-info/course-info.component";
import { SharedModule } from "src/app/shared/shared.module"; // Import the SharedModule

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseCardComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule, // Import the SharedModule
  ],
  exports: [CoursesComponent, CoursesListComponent, CourseInfoComponent],
})
export class CoursesModule {}
