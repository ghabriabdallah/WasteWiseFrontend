import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../Admin/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})

export class DriversListComponent {
  users!: any[];

  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/WasteWise/Admin/AllUsers')
      .subscribe(users => {
        this.users = users.filter(user => user.role && user.role.includes('DRIVER'));
      });
  }
  

  deleteUser(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Are you sure you want to delete this user?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:8080/WasteWise/Admin/RemoveUser/${id}`)
          .subscribe(() => {
            this.users = this.users.filter(user => user.id !== id);
          });
      }
    });
  }
  updateUser(id: number) {
    this.router.navigate(['/updateUser', id]);
  }
  
}
