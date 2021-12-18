import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {task} from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.less']
})
export class TaskItemComponent implements OnInit {

  constructor() { }
  @Input() task:task;
  @Output() onDeleteTask: EventEmitter<task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<task> = new EventEmitter();
  ngOnInit(): void {
  }
  onDelete(task:task):void { 
    this.onDeleteTask.emit(task);
  }
  onToggle(task:task):void {
    this.onToggleReminder.emit(task);
  }

}
