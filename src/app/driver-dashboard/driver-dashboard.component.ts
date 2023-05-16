import { Component, OnInit } from '@angular/core';
import { User } from '../User/user';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent implements OnInit {
  user: User = new User();
  driverId!: number;
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}
  ngOnInit(): void {
    const email = this.authService.getUsername();
    if (email) {
      this.userService.getUserByEmail(email).subscribe((user: User) => {
        this.user = user;
        this.driverId = user.id;
        console.log(this.driverId);
      });
    }
  }



}
