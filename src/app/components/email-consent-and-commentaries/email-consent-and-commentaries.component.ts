import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-email-consent-and-commentaries',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './email-consent-and-commentaries.component.html',
  styleUrl: './email-consent-and-commentaries.component.scss'
})
export class EmailConsentAndCommentariesComponent {

  @Input() label: string = '';
  @Output() buttonClick = new EventEmitter<any>();

  consentForm = new FormGroup({
    concentUpdates: new FormControl<string | null>(null, Validators.required),
    commentaries: new FormControl('')
  });

  submit() {
    this.buttonClick.emit(this.consentForm.value);
  }
}
