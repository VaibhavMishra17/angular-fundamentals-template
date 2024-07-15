import { Component, OnInit } from "@angular/core";
import { mockedAuthorsList, mockedCoursesList } from "./shared/mocks/mock";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isLoggedIn = false;
  username = "Harry Potter";
  courses: any[] = [];
  selectedCourse: any = null;

  ngOnInit() {
    this.courses = mockedCoursesList.map((course) => {
      return {
        ...course,
        authors: course.authors.map(
          (authorId) =>
            mockedAuthorsList.find((author) => author.id === authorId)?.name
        ),
      };
    });
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }

  handleShowCourse(course: any) {
    this.selectedCourse = course;
  }

  handleEditCourse(course: any) {
    console.log("Edit Course:", course);
  }

  handleDeleteCourse(course: any) {
    console.log("Delete Course:", course);
  }
}
