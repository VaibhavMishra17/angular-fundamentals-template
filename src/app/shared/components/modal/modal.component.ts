import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() 
  isVisible: boolean = false;

  @Input() 
  title!: string;

  @Input() 
  message!: string;

  @Input() 
  okButtonText!: string;

  @Input() 
  cancelButtonText!: string;
  
  @Output() 
  isVisibleChange: EventEmitter<boolean> = new EventEmitter();

  @Output() 
  outputResult: EventEmitter<boolean> = new EventEmitter();

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
  }

  private hideModal() {
    this.isVisible = false;
    this.isVisibleChange.emit(false);
  }

  onConfirm() {
    this.outputResult.emit(true);
    this.hideModal();
  }

  onCancel() {
    this.outputResult.emit(false);
    this.hideModal();
  }
}