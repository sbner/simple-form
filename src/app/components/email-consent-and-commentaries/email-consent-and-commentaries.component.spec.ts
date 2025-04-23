import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailConsentAndCommentariesComponent } from './email-consent-and-commentaries.component';

describe('EmailConsentAndCommentariesComponent', () => {
  let component: EmailConsentAndCommentariesComponent;
  let fixture: ComponentFixture<EmailConsentAndCommentariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailConsentAndCommentariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailConsentAndCommentariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
