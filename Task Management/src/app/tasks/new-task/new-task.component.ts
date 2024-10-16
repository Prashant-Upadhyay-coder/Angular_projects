import { Component, EventEmitter, Input, Output, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewaddTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
 @Input({required:true})userId!:string
  @Output()close = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewaddTask>();

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

   constructor(private ts :TasksService){

   }
  oncancel() {
    this.close.emit();
  }
  onSubmit() {
    this.ts.addTask(
      {
      title:this.enteredTitle,
      summary:this.enteredSummary,
      date:this.enteredDate,
    },this.userId)
    this.close.emit();
  }
}
