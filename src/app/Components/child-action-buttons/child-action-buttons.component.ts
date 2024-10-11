import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-action-buttons',
  templateUrl: './child-action-buttons.component.html',
  styleUrls: ['./child-action-buttons.component.scss']
})
export class ChildActionButtonsComponent {
  @Input() child: any; // Input from the child row

  onEdit() {
    alert(`Edit Child Task: ${this.child.taskType}`);
  }

  onDelete() {
    alert(`Delete Child Task: ${this.child.taskType}`);
  }

  onCopy() {
    alert(`Copy Child Task: ${this.child.taskType}`);
  }
}
