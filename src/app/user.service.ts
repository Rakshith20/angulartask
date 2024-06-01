import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  getAllUsers() {
    return this.httpClient.get('http://localhost:3000/users');
  }

  addUser(user: any) {
    return this.httpClient.post('http://localhost:3000/users', user);
  }

  deleteUser(userId: string) {
    return this.httpClient.delete(`http://localhost:3000/users/${userId}`);
  }

  editUser(user: any) {
    return this.httpClient.put(`http://localhost:3000/users/${user.id}`, user);
  }
}
