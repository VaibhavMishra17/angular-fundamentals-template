import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { CoursesComponent } from '@features/courses/courses.component';
import { CoursesListComponent } from '@features/courses/course-list/courses-list.component';
import { CoursesRoutingModule } from '@features/courses/courses-routing.module';
import { CourseInfoComponent } from '@features/course-info/course-info.component';



@NgModule({
  declarations: [
    CoursesComponent,
    CoursesListComponent,
    CourseInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule,
  ],
  exports: [
    CoursesComponent,
    CoursesListComponent,
    CourseInfoComponent,
  ],
})
export class CoursesModule { }
