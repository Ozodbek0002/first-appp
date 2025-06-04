import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url = 'https://683fe20d5b39a8039a55f6f2.mockapi.io/users/users';

  getUsers() {
    return this.http.get<Users[]>(this.url);
  }

  getUserById(id: string) {
    return this.http.get<Users>(`${this.url}/${id}`);
  }

  addUser(user: Users) {
    return this.http.post<Users>(this.url, user);
  }

  updateUser(id: string, user: Users) {
    return this.http.put<Users>(`${this.url}/${id}`, user);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

  
}
