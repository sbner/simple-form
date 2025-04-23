import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AllQuestionsComponent } from "./components/all-questions/all-questions.component";
import { EmailConsentAndCommentariesComponent } from './components/email-consent-and-commentaries/email-consent-and-commentaries.component';
import { ProfileComponent } from "./components/profile/profile.component";
import { ThankYouComponent } from './components/thank-you/thank-you.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, ProfileComponent, AllQuestionsComponent, CommonModule, EmailConsentAndCommentariesComponent, ThankYouComponent, NgOptimizedImage],
})
export class AppComponent {
  title = 'simple-form';
  researcherForm = new FormGroup({
    name: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    everWorried: new FormControl(''),
    fakeNewsFrequency: new FormControl(''),
    interestedInAI: new FormControl(''),
    functionalities: new FormControl<string[]>([]),
    biggestConcerns: new FormControl<string[]>([]),
    concentUpdates: new FormControl(''),
    commentaries: new FormControl('')
  });
  currentStep = 0;
  steps = [
    { id: 'landing-text', label: '' },
    { id: 'profile', label: 'Me fale um pouco sobre você' },
    { id: 'all-questions', label: 'Queremos saber sua opnião.' },
    { id: 'email-consent-and-commentaries', label: 'Queremos saber sua opnião.' },
    { id: 'thank-you', label: '' }
  ];

  nextStep() {
    this.currentStep++
  }

  handleFormSubmit(event: any) {
    console.log(event);
    this.researcherForm.patchValue(event);
    this.nextStep();
  }
}
