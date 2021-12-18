import { Component, OnInit } from '@angular/core';
import {task} from '../task';
import {TASKS} from '../mock-task'
import {TaskServiceService} from '../task-service.service'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  tasks:task[] = TASKS;

  constructor(private taskService: TaskServiceService) { }  

  ngOnInit(): void {
   this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task:task):void {
    this.taskService.
    deleteTask(task).
    subscribe(
      ()=> this.tasks = this.tasks.filter(newtask => newtask.id != task.id ));
  }
  toggleReminder(task:task):void {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe();
  }

}
