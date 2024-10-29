import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '@app/models/courses-api-results';
import { IconName } from '@features/enums/iconName.enum';

@Component({
  selector: 'app-course-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent {
  @Input() courses: Course[] | null = null;
  @Input() editable: boolean = true;
  @Output() showCourse: EventEmitter<Course> = new EventEmitter<Course>();
  @Output() deleteCourse = new EventEmitter<string>()
  @Output() editCourse = new EventEmitter<string>()

  constructor() {}

  iconEnum: typeof IconName = IconName;

  edit(id: string): void {
    this.editCourse.emit(id);
  }

  remove(id: string): void {
    this.deleteCourse.emit(id);
  }

  clickOnShow(data: Course): void {
    this.showCourse.emit(data);
  }
}
