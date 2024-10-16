import { Component, inject, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required:true})userName?:string
@Input({required:true})userID!:string

isAddingTask = false;

constructor(private ts :TasksService){}

get usertask(){
  return this.ts.getusertask(this.userID)
}

onStartAdd(){
  this.isAddingTask =true
}

onCloseAddTask(){
  this.isAddingTask =false
}


}