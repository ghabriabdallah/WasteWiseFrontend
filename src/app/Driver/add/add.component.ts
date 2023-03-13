import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/app/User/user';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  user: User = new User();
  successMessage = '';
  errorMessage = '';
  myForm!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required]
    });
  }

  get f() {
    return this.myForm.controls;
  }

  addDriver(addForm: any) {
    if (this.user.password.length < 6 || this.user.password.length > 30) {
      this.errorMessage = 'Password must be between 6 and 30 characters';
      this.successMessage = '';
      return;
    }

    const specialChars = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    if (specialChars.test(this.user.password)) {
      this.errorMessage = 'Password cannot contain special characters';
      this.successMessage = '';
      return;
    }

    this.authService.addDriver(this.user).subscribe(
      data => {
        this.successMessage = 'User added successfully';
        this.errorMessage = '';
        setTimeout(() => {
          this.router.navigate(['/adminDashboard']);
        }, 1500);
      },
      error => {
        if (error.status === 403) {
          this.errorMessage = 'Email already exists. Please use a different email address.';
        } else {
          this.errorMessage = 'Error occurred while adding user';
        }
        this.successMessage = '';
      }
    );
  }

}
