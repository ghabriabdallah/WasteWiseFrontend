import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../Mission';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { User } from '../User/user';

@Component({
  selector: 'app-driver-dashboard',
  templateUrl: './driver-dashboard.component.html',
  styleUrls: ['./driver-dashboard.component.css']
})
export class DriverDashboardComponent implements OnInit {
  driverId!: number;
  missions!: any[];
  user: User = new User();


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
        console.log(user);
        this.user = user;
        this.driverId = user.id;
        this.getTodaysMissionsByDriverId(this.driverId);
      });
    }
  }
  getTodaysMissionsByDriverId(driverId: number): void {
    const url = `http://localhost:8080/WasteWise/todayMissionsByDriver/${driverId}`;
    this.http.get<Mission[]>(url).subscribe(
      (missions: Mission[]) => {
        this.missions = missions;
      },
      (error) => {
        console.error('Failed to get missions:', error);
      }
    );
  }

  toggleDuty() {
    this.userService.changeDuty(this.driverId).subscribe(() => {
      this.user.onDuty = !this.user.onDuty;
    });
  }
  

}
