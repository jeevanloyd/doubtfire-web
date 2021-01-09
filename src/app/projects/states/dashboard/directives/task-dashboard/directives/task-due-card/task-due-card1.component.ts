import { Component, Input} from '@angular/core';

@Component({
  selector: 'task-due-card1',
  templateUrl: 'task-due-card1.component.html',
  styleUrls: ['task-due-card1.component.scss']
})
export class TaskDueCard1Component {
  @Input() task: any;
  constructor(
  ) {
    };
}

