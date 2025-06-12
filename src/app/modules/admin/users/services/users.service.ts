import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserRequest } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url = '/api/users';

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  getUserById(id: string) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  addUser(user: UserRequest) {
    return this.http.post<UserRequest>(this.url, user);
  }

  updateUser(id: string, user: User) {
    return this.http.put<User>(`${this.url}/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
