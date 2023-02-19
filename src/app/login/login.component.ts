import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    const loginData = { username: this.username, password: this.password };
    this.authService.login(loginData).subscribe(
      (response: any) => {
        // store jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('jwtToken', response.token);
        this.router.navigate(['/home']);
      },
      error => {
        if (error.status === 403) {
          this.errorMessage = 'Invalid email/password combination.';
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
      }
    );
  }
  
}
