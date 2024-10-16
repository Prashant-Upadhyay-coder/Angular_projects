import { Injectable } from '@angular/core';
import { dummyTasks } from './dummt-tasks';
import { NewaddTask } from './task/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

 private tasks = dummyTasks

 constructor(){
  const tasks=localStorage.getItem("tasks")
  if(tasks){
    this.tasks = JSON.parse(tasks)
  }
 }

 getusertask(userId:string){
  return this.tasks.filter((task)=> task.userId === userId)
}
addTask(taskData:NewaddTask ,userId:string){
this.tasks.unshift({
  id: new Date().getTime().toString(),
  userId: userId,
  title: taskData.title,
  summary: taskData.summary,
  dueDate:taskData.date
})
this.saveTask()
}
removeTask(Id:string){
  this.tasks = this.tasks.filter((task) => task.id !== Id)
  this.saveTask()
}
private saveTask(){
  localStorage.setItem("tasks",JSON.stringify(this.tasks))
}
}
