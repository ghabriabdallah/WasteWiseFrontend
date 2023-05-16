import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../Admin/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-missions-list',
  templateUrl: './missions-list.component.html',
  styleUrls: ['./missions-list.component.css']
})
export class MissionsListComponent {
  missions!: any[];

  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/WasteWise/Admin/AllMissions')
      .subscribe(missions => {
        this.missions = missions;
      });
  }
  
  deleteMission(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Are you sure you want to delete this mission?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:8080/WasteWise/Admin/deleteMission/${id}`)
          .subscribe(() => {
            this.missions = this.missions.filter(mission => mission.id !== id);
          });
      }
    });
  }

}
