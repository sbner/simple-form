import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

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
    name: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl('')
  });

  submit() {
    this.buttonClick.emit(this.profileForm.value);
  }

}
