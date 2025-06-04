import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { log } from 'console';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { Person, Users } from '../models/users.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-users',
  imports: [NzDividerModule, NzTableModule, NzButtonModule, NzIconModule, CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  listOfData: Users[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<Users[]>('https://683fe20d5b39a8039a55f6f2.mockapi.io/users/users')
      .subscribe((data) => {
        this.listOfData = data;
      });
  }
}
