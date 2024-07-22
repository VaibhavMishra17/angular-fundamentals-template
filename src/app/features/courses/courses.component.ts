import { Component, OnInit } from "@angular/core";
// Import other necessary modules and services

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.scss"],
})
export class CoursesComponent implements OnInit {
  // Add necessary properties

  constructor(/* Inject necessary services */) {}

  ngOnInit(): void {
    // Initialize component
  }

  onSearch(searchTerm: string): void {
    // Handle search logic, e.g., filter the courses list based on searchTerm
    console.log("Search term:", searchTerm);
  }
}
