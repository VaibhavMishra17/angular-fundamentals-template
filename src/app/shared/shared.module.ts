import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./components/button/button.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { InfoComponent } from "./components/info/info.component";

@NgModule({
  declarations: [ButtonComponent, InfoComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ButtonComponent, FontAwesomeModule, InfoComponent],
})
export class SharedModule {}
