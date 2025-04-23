import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from "./components/profile/profile.component";
import { AllQuestionsComponent } from "./components/all-questions/all-questions.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [ReactiveFormsModule, ProfileComponent, AllQuestionsComponent],	
})
export class AppComponent {
  title = 'simple-form';
  researcherForm = new FormGroup({
    name: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    everWorried: new FormControl(''),
    fakeNewsFrequency: new FormControl(''),
    interestedIn: new FormControl(''),
    functionalities: new FormControl(''),
    biggestConcerns: new FormControl(''),
    concentUpdates: new FormControl(''),
    comment: new FormControl('')    
  });

  goToProfile() {
    // this.router.navigate(['/profile'], { skipLocationChange: true });
  }
}
