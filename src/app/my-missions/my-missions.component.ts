import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Mission } from '../Mission';

@Component({
  selector: 'app-my-missions',
  templateUrl: './my-missions.component.html',
  styleUrls: ['./my-missions.component.css']
})
export class MyMissionsComponent implements OnInit {
  driverId!: number;
  missions!: any[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.driverId = +params['driverId'];
      this.getMissionsByDriverId(this.driverId);
    });
  }

  getMissionsByDriverId(driverId: number): void {
    const url = `http://localhost:8080/WasteWise/missionsByDriver/${driverId}`;
    this.http.get<Mission[]>(url).subscribe(
      (missions: Mission[]) => {
        this.missions = missions;
      },
      (error) => {
        console.error('Failed to get missions:', error);
      }
    );
  }

  startMission(missionId: number): void {
    const url = `http://localhost:8080/WasteWise/Admin/updateMissionStatus/${missionId}`;
    const missionStatus = 'Started';
    this.http.patch(url, { missionStatus }).subscribe(
      () => {
        console.log('Mission status updated successfully.');
        this.router.navigate(['/driverDashboard']);
      },
      (error) => {
        console.error('Failed to update mission status:', error);
      }
    );
  }

  missionOnHold(missionId: number): void {
    const url = `http://localhost:8080/WasteWise/Admin/updateMissionStatus/${missionId}`;
    const missionStatus = 'OnHold';
    this.http.patch(url, { missionStatus }).subscribe(
      () => {
        console.log('Mission status updated successfully.');
        this.router.navigate(['/driverDashboard']);
      },
      (error) => {
        console.error('Failed to update mission status:', error);
      }
    );
  }

  missionAccomplished(missionId: number): void {
    const url = `http://localhost:8080/WasteWise/Admin/updateMissionStatus/${missionId}`;
    const missionStatus = 'Finished';
    this.http.patch(url, { missionStatus }).subscribe(
      () => {
        console.log('Mission status updated successfully.');
        this.router.navigate(['/driverDashboard']);
      },
      (error) => {
        console.error('Failed to update mission status:', error);
      }
    );
  }

}