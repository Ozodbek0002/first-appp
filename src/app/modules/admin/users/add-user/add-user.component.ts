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
  private fb = inject(NonNullableFormBuilder);
  private _modalService = inject(NzModalService);

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
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }

  CloseModal(): void {
    this._modalService.closeAll();
  }
}
