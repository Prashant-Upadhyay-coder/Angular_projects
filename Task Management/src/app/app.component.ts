import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: false,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Myapp';
  users =DUMMY_USERS
  selectedUserId?:string;
 
get selectedUser(){
  return this.users.find((user)=> user.id === this.selectedUserId)
}

onselecteduser(id:string){
  this.selectedUserId = id
  }
  
}
