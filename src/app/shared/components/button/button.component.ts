import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { IconName } from '@features/enums/iconName.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  @Input() buttonText: string = 'show course-info';
  @Input() iconName!: IconName;

  @Input()
  typeName!: string;

  @Input()
  disabled?: boolean;

  @Output()
  click: EventEmitter<void> = new EventEmitter();

  iconEnum: typeof IconName = IconName;

  onClick(event: any): void {
    event.stopPropagation();
    this.click.emit();
  }
}
