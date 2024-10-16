import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { BrowserModule } from '@angular/platform-browser';
import { TaskComponent } from './tasks/task/task.component';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/card/shared/shared.module';
import { TasksModule } from './tasks/tasks/tasks.module';

@NgModule({
  declarations: [
    AppComponent , 
    HeaderComponent ,
    UserComponent,
    ],
  bootstrap:[AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    TasksModule
    ],
   
  
})
export class AppModule { }
