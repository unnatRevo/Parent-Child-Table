import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ParentEditModel } from 'src/app/Models/parent-edit.model';

@Component({
  selector: 'app-parent-action-buttons',
  templateUrl: './parent-action-buttons.component.html',
  styleUrls: ['./parent-action-buttons.component.scss']
})
export class ParentActionButtonsComponent {
  @Input() parent: any; // Input from the parent row

  @Output() edit: EventEmitter<ParentEditModel> = new EventEmitter<ParentEditModel>();

  onInfo() {
    alert(`Info: ${this.parent.title}`);
  }

  onEdit() {
    const pEdit = new ParentEditModel().ToParentEditModel(this.parent);
    this.edit.emit(pEdit);
  }

  onDelete() {
    alert(`Delete: ${this.parent.title}`);
  }

  onCopy() {
    alert(`Copy: ${this.parent.title}`);
  }
}
