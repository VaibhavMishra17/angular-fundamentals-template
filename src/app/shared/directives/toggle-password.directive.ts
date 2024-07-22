import {
  Directive,
  HostListener,
  Input,
  Renderer2,
  ElementRef,
} from "@angular/core";

@Directive({
  selector: "[appTogglePassword]",
  exportAs: "togglePassword",
})
export class TogglePasswordDirective {
  private _shown = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("click")
  onClick() {
    this._shown = !this._shown;
    if (this._shown) {
      this.renderer.setAttribute(
        this.el.nativeElement.previousElementSibling,
        "type",
        "text"
      );
    } else {
      this.renderer.setAttribute(
        this.el.nativeElement.previousElementSibling,
        "type",
        "password"
      );
    }
  }

  get shown() {
    return this._shown;
  }
}
