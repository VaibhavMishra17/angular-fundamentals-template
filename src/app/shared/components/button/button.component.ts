import { Component, Input } from "@angular/core";
import { FaIconLibrary } from "@fortawesome/angular-fontawesome";
import { faTrash, faPen, faPlay } from "@fortawesome/free-solid-svg-icons";
import { IconName } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() text?: string;
  @Input() icon?: IconName; // Update the type to IconName
  @Input() type: "button" | "submit" | "reset" = "button";

  constructor(library: FaIconLibrary) {
    library.addIcons(faTrash, faPen, faPlay); // Add more icons as needed
  }
}
