import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../feedback';
import { FeedbackService } from '../feedback.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private feedbackService: FeedbackService) {}

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      numTel: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const feedback: Feedback = {
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      email: this.contactForm.value.email,
      numTel: this.contactForm.value.numTel,
      message: this.contactForm.value.message
    };
  
    this.feedbackService.createFeedback(feedback).subscribe(() => {
      this.successMessage = 'Feedback received, we appreciate it!';
      this.errorMessage = '';
    }, error => {
      this.successMessage = '';
      this.errorMessage = error.message || 'An unexpected error occurred please verify the form';
    });
  }
  
  
}
