import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {

    contactForm!: FormGroup;
  
    constructor(private formBuilder: FormBuilder) { }
  
    ngOnInit(): void {
      this.contactForm = this.formBuilder.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        message: ['', Validators.required]
      });
    }
  
    onSubmit(): void {
      console.log(this.contactForm.value);
    }
  
    get f() {
      return this.contactForm.controls;
    }
  
  }