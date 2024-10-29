import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[toggle]'
})
export class ToggleDirective {
    private _shown = false;

    constructor(private el: ElementRef) {
        const parent = this.el.nativeElement.parentNode;
        const icon = document.createElement('div');
        icon.classList.add('eye-icon');
        icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
        icon.addEventListener('click', () => {
            this.toggle(icon);
        });
        parent.appendChild(icon);
    }

    toggle(icon: HTMLElement) {
        this._shown = !this._shown;
        if (this._shown) {
            this.el.nativeElement.setAttribute('type', 'text');
            icon.innerHTML = '<i class="fas fa-eye"></i>';
        } else {
            this.el.nativeElement.setAttribute('type', 'password');
            icon.innerHTML = '<i class="fas fa-eye-slash"></i>';
        }
    }
}