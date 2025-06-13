import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserRequest } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  url = '/api/users';

  reload() {
    return this.getUsers().subscribe();
  }

  /**
   * 
   * @returns An observable of the list of users
   */
  getUsers() {
    return this.http.get<User[]>(this.url);
  }


  /**
   * 
   * @param id The ID of the user to retrieve
   * @returns An observable of the user with the specified ID
   */
  getUserById(id: number) {
    return this.http.get<User>(`${this.url}/${id}`);
  }

  /**
   * 
   * @param user The user to add
   * @returns An observable of the added user
   */
  addUser(user: UserRequest) {
    return this.http.post<UserRequest>(this.url, user);
  }

  /**
   * 
   * @param id The ID of the user to update
   * @param user The user data to update
   * @returns An observable of the updated user
   */
  updateUser(id: number, user: User) {
    return this.http.put<User>(`${this.url}/${id}`, user);
  }

  /**
   * 
   * @param id The ID of the user to delete
   * @returns An observable of the deleted user
   */
  deleteUser(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
