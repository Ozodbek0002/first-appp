import { Component } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { User } from '../models/users.model';
import { CommonModule } from '@angular/common';
import { UsersService } from '../services/users.service';
import { NzModalModule, NzModalService } from 'ng-zorro-antd/modal';
import { AddUserComponent } from '../add-user/add-user.component';

@Component({
  selector: 'app-users',
  imports: [
    NzDividerModule,
    NzTableModule,
    NzButtonModule,
    NzIconModule,
    CommonModule,
    NzModalModule,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  listOfData: User[] = [];

  constructor(
    private _usersService: UsersService,
    private _modalService: NzModalService
  ) {}

  ngOnInit(): void {
    this._usersService.getUsers().subscribe((data) => {
      this.listOfData = data.sort((a, b) => a.id - b.id);
    });
  }

  addModal(): void {
    this._modalService.create({
      nzTitle: 'Add New User',
      nzContent: AddUserComponent,
      nzClosable: true,
      nzMaskClosable: false,
      nzFooter: null,
      nzWidth: '50%',
      nzStyle: { top: '20px' },
    });
  }

  DeleteUser(user: User): void {
    this._modalService.confirm({
      nzTitle: 'Are you sure you want to delete this user?',
      nzContent: `User: ${user.name}`,
      nzOnOk: () => {
        this._usersService.deleteUser(user.id).subscribe(() => {
          this.listOfData = this.listOfData.filter((u) => u.id !== user.id);
        });
      },  
    });
  }
}
