import { Component, inject } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { UsersService } from '../services/users.service';
import { UserFormData, UserRequest } from '../models/users.model';

@Component({
  selector: 'app-add-user',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzRadioModule,
    NzDatePickerModule,
    NzIconModule,
  ],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css',
})
export class AddUserComponent {
  [x: string]: any;
  private fb = inject(NonNullableFormBuilder);
  private _modalService = inject(NzModalService);
  private _usersService = inject(UsersService);

  validateForm = this.fb.group({
    name: this.fb.control('', [Validators.required]),
    phone: this.fb.control('', [Validators.required]),
    address: this.fb.control('', [Validators.required]),
    dateOfBirth: this.fb.control<Date | null>(null, [Validators.required]),
    dateOfRegister: this.fb.control<Date | null>(null, [Validators.required]),
    specialization: this.fb.control('', [Validators.required]),
    description: this.fb.control('', [Validators.required]),
  });

  submitForm(): void {
    console.log('submit', this.validateForm.value);
    if (this.validateForm.valid) {
      const formValue = this.validateForm.value as UserFormData;

      if (this.isValidUserData(formValue)) {
        const userRequest: UserRequest = {
          name: formValue.name ? formValue.name : '',
          description: formValue.description ? formValue.description : '',
          phone: formValue.phone ? formValue.phone : '',
          address: formValue.address ? formValue.address : '',
          dateOfBirth: formValue.dateOfBirth ? formValue.dateOfBirth : null,
          dateOfRegister: formValue.dateOfRegister
            ? formValue.dateOfRegister
            : null,
          specialization: formValue.specialization
            ? formValue.specialization
            : '',
        };

        this._usersService.addUser(userRequest).subscribe({
          next: () => {
            this.CloseModal();
            this._modalService.success({
              nzTitle: 'User Added Successfully',
            });
            this._usersService.loadUsers();
          },
          error: (error) => {
            console.error('Error adding user:', error);
          },
        });
      }
    }
  }

  isValidUserData(data: UserFormData): data is Required<UserFormData> {
    return !!(
      data.name &&
      data.description &&
      data.phone &&
      data.address &&
      data.dateOfBirth &&
      data.dateOfRegister &&
      data.specialization
    );
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }

  CloseModal(): void {
    this._modalService.closeAll();
  }
}
