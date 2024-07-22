import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from "@angular/forms";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.scss"],
})
export class CourseFormComponent implements OnInit {
  courseForm!: FormGroup;

  constructor(private fb: FormBuilder, public library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(2)]],
      description: ["", [Validators.required, Validators.minLength(2)]],
      duration: ["", [Validators.required, Validators.min(0)]],
      newAuthor: this.fb.group({
        name: [
          "",
          [
            Validators.required,
            Validators.minLength(2),
            Validators.pattern("^[a-zA-Z0-9]+$"),
          ],
        ],
      }),
      authors: this.fb.array([]),
      allAuthors: this.fb.array([
        this.fb.group({ name: "Author One", id: "1" }),
        this.fb.group({ name: "Author Two", id: "2" }),
      ]),
    });
  }

  get title() {
    return this.courseForm.get("title");
  }

  get description() {
    return this.courseForm.get("description");
  }

  get duration() {
    return this.courseForm.get("duration");
  }

  get newAuthor() {
    return this.courseForm.get("newAuthor.name");
  }

  get authors(): FormArray {
    return this.courseForm.get("authors") as FormArray;
  }

  get allAuthors(): FormArray {
    return this.courseForm.get("allAuthors") as FormArray;
  }

  addAuthor(): void {
    if (this.newAuthor?.valid) {
      this.allAuthors.push(
        this.fb.group({
          name: this.newAuthor.value,
          id: new Date().getTime().toString(),
        })
      );
      this.newAuthor.reset();
    }
  }

  addCourseAuthor(author: any): void {
    this.authors.push(author);
    this.removeAllAuthor(author);
  }

  removeCourseAuthor(index: number): void {
    this.allAuthors.push(this.authors.at(index) as FormGroup);
    this.authors.removeAt(index);
  }

  removeAllAuthor(author: FormGroup): void {
    const index = this.allAuthors.controls.indexOf(author);
    if (index !== -1) {
      this.allAuthors.removeAt(index);
    }
  }

  onSubmit(): void {
    if (this.courseForm.valid) {
      // Handle form submission
      console.log("Form Submitted!", this.courseForm.value);
    } else {
      this.markFormGroupTouched(this.courseForm);
    }
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
