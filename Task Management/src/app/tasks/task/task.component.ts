import { Component, inject, Input } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';



@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
 @Input({ required: true }) task!: Task;

 private ts = inject(TasksService)
 oncompleteTask(){
  this.ts.removeTask(this.task.id)
 }
}
