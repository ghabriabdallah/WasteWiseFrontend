import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User = new User();
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.user).subscribe(
      data => {
        this.successMessage = 'User registered successfully';
        this.errorMessage = '';
      },
      error => {
        this.successMessage = '';
        this.errorMessage = 'Error occurred while registering user';
      }
    );
  }

}
