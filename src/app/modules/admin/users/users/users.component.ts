import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import {  Users } from '../models/users.model';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  imports: [
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    CommonModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  listOfData: Users[] = [];

  constructor(private _usersService: UsersService) {}

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((data) => {
      this.listOfData = data;
    });

    // this._usersService.getUserById('1').subscribe((data) => {
    //   console.log('User with ID 1:', data);
    // });

    //   this._usersService
    //     .addUser({
    //       id: '10',
    //       name: 'New User',
    //       description: 'This is a new user',
    //       phone: '1234567890',
    //       address: '123 New Street',
    //       createdAt: new Date(),
    //       dateOfBirth: new Date('1990-01-01'),
    //       dateOfRegister: new Date(),
    //       specialization: 'General',
    //     })
    //     .subscribe((data) => {
    //       console.log('Added User:', data);
    //     });
  }
}
