import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task';
  users:any=[];
  constructor(private userService: UserService){}

  onSave(data:any){
    console.log(data);

    this.userService.addUser(data).subscribe((data)=>{
      console.log(data);
      this.getUsers();
    })
  }
ngOnInit(): void {
  this.getUsers();
}

getUsers(){
  this.userService.getAllUsers().subscribe((users)=>{
    console.log(users)
    this.users=users;
  })
}

  
}
