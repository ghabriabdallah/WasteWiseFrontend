import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../auth.service';
import jwt_decode from 'jwt-decode';
import { interval } from 'rxjs';


interface DecodedToken {
  role: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';
  currentBgIndex = 0;
  


  constructor(private authService: AuthService, private router: Router) {}

  
  
  onSubmit(): void {
    const loginData = { username: this.username, password: this.password };
    this.authService.login(loginData).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.token);
        const decodedToken: DecodedToken = jwt_decode(response.token);
        if (decodedToken.role.includes('USER')) {
          this.router.navigate(['']);
        } else if (decodedToken.role.includes('ADMIN')) {
          this.router.navigate(['/adminDashboard']);
        } else if (decodedToken.role.includes('DRIVER')) {
          this.router.navigate(['/driverDashboard']);          
        } else {
          this.errorMessage = 'Invalid role. Please contact the administrator.';
        }
      },
      error => {
        if (error && error.status === 403) {
          this.errorMessage = 'Invalid email/password combination.';
        } else {
          this.errorMessage = 'An unexpected error occurred. Please try again later.';
        }
      }
    );
  }
}
