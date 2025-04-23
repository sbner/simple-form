import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  @Input() label: string = '';
  @Output() buttonClick = new EventEmitter<any>();

  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  submit() {
    if (this.profileForm.valid) {
      this.buttonClick.emit(this.profileForm.value);
    }
  }

}
