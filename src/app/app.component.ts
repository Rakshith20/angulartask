import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'task';
  users: any = [];
  @ViewChild('register') registerForm: any;
  isEditing: boolean = false;
  editUserId: string = '';
  constructor(private userService: UserService) {}

  onSave(data: any) {
    if (this.isEditing) {
      data.id = this.editUserId;
      this.userService.editUser(data).subscribe((data) => {
        this.getUsers();
      });
      this.isEditing = false;
      this.editUserId = '';
    } else {
      this.userService.addUser(data).subscribe((data) => {
        this.getUsers();
      });
    }
    this.registerForm.reset();
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  onDelete(id: string) {
    this.userService.deleteUser(id).subscribe((users) => {
      this.getUsers();
    });
  }

  onEdit(user: any) {
    this.isEditing = true;
    this.editUserId = user.id;
    this.registerForm.setValue({
      firstname: user.firstname,
      lastname: user.lastname,
      dob: user.dob,
    });
  }
}
