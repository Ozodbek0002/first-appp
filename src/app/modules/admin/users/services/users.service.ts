import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserRequest } from '../models/users.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usersSubject = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject.asObservable();

  constructor(private http: HttpClient) {}

  url = '/api/users';

  /**
   * Loads the list of users and updates the BehaviorSubject.
   * This method can be called to refresh the user list.
   */
  loadUsers(): void {
    this.getUsers().subscribe({
      next: (users) => {
        this.usersSubject.next(users.sort((a, b) => a.id - b.id));
      },
      error: (error) => {
        console.error('Error loading users:', error);
      },
    });
  }

  /**
   *
   * @returns An observable of the list of users
   */
  getUsers(): Observable<User[]> {
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
  addUser(user: UserRequest): Observable<any> {
    return this.http.post(this.url, user);
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
