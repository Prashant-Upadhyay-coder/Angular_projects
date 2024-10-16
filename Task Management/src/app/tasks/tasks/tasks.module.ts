import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { TasksComponent } from '../tasks.component';
import { TaskComponent } from '../task/task.component';
import { NewTaskComponent } from '../new-task/new-task.component';
import { SharedModule } from '../../shared/card/shared/shared.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TasksComponent,
    TaskComponent,
    NewTaskComponent],
  imports: [
    CommonModule, FormsModule,SharedModule,
  ],
  exports:[TasksComponent]
})
export class TasksModule { }
