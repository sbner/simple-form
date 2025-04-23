import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  profileForm = new FormGroup({
    name: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl('')
  });

  onSubmit() {}

}
