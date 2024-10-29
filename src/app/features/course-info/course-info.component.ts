import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from '@angular/common';
import { CoursesStoreService } from '@app/services/courses-store.service';
import { Course } from '@app/models/courses-api-results';

@Component({
  selector: 'app-course-info',
  templateUrl: './course-info.component.html',
  styleUrls: ['./course-info.component.scss']
})
export class CourseInfoComponent implements OnInit {
  course?: Course;

  constructor(
    private route: ActivatedRoute,
    private coursesStoreService: CoursesStoreService,
    private location: Location
  ) { }

  ngOnInit() {
    const cardId = this.route.snapshot.paramMap.get('id');
    if (cardId) {
      this.coursesStoreService.getCourse(cardId).subscribe(data => {
        this.course = data.result;
      });
    }
  }

  goBack() {
    this.location.back();
  }
}
