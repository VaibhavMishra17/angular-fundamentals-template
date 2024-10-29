import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { UserStoreService } from '@app/user/services/user-store.service';
import { CoursesStateFacade } from '@app/store/courses/courses.facade';
import { filter } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses!: any;
  isAdmin: boolean = false;
  isShowConfirmModal = false;
  deletedId: string | null = null;

  constructor(
    private coursesStoreService: CoursesStoreService,
    private userStoreService: UserStoreService,
    private router: Router,
    private coursesFacade: CoursesStateFacade
  ) { }

  ngOnInit() {
    this.userStoreService.isAdmin$.subscribe((res) => {
    this.isAdmin = res;
    })
    this.coursesFacade.getAllCourses()
    this.coursesFacade.allCourses$
        .pipe(filter(value => !!value))
        .subscribe((item: any) => {
          this.courses = item.result;
        });
  }

  deleteItem(id: string) {
    console.log("delete", id);
    this.isShowConfirmModal = true;
    this.deletedId = id;
  }

  editItem(id: string) {
    this.router.navigate([`/courses/edit/${id}`]);
  }

  confirmedDelete() {
    if (this.deletedId) {
      this.coursesStoreService.deleteCourse(this.deletedId).subscribe();
    }

    this.deletedId = null;
  }

  search(text: string) {
    if (text) {
      this.coursesStoreService.getFilterCourses(text).subscribe();
    } else {
      this.coursesStoreService.getAll().subscribe();
    }
  }

  addCourse(): void {
    console.log('add course-info');
    this.router.navigate(['/courses/add']);
  }
}
