import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User } from '../../User/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: User = new User();
  successMessage = '';
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
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

    this.authService.register(this.user).subscribe(
      data => {
        this.successMessage = 'User registered successfully, now please login';
        this.errorMessage = '';
      },
      error => {
        if (error.status === 403) {
          this.errorMessage = 'Email already exists. Please use a different email address.';
        } else {
          this.errorMessage = 'Error occurred while registering user';
        }
        this.successMessage = '';
      }
    );
  }

}
