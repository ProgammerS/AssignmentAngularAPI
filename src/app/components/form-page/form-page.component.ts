import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  feedbackForm: FormGroup;
  submitted = false;  // To track submission state

  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],  // 10-digit phone number
      rating: [null, [Validators.required, Validators.min(1), Validators.max(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log('Form Submitted:', this.feedbackForm.value);
      this.submitted = true;
      // Optionally reset form or display a success message
      setTimeout(() => this.feedbackForm.reset(), 3000);  // Reset after 3 seconds
    } else {
      console.log('Form is invalid');
    }
  }

  get name() {
    return this.feedbackForm.get('name');
  }

  get email() {
    return this.feedbackForm.get('email');
  }

  get phone() {
    return this.feedbackForm.get('phone');
  }

  get rating() {
    return this.feedbackForm.get('rating');
  }

  get message() {
    return this.feedbackForm.get('message');
  }
}
