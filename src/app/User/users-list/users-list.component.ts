import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../Admin/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users!: any[];
  searchTerm: string = '';


  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.loadDrivers();
  }
  

  loadDrivers() {
    this.http.get<any[]>('http://localhost:8080/WasteWise/Admin/AllUsers')
      .subscribe(users => {
        this.users = users.filter(user => user.role && user.role.includes('USER'));
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
  searchDrivers() {
    const searchTerm = this.searchTerm.toLowerCase().trim();
    
    if (searchTerm === '') {
      this.loadDrivers(); 
    } else {
      this.users = this.users.filter(user =>
        (user.firstName && user.firstName.toLowerCase().includes(searchTerm)) ||
        (user.lastName && user.lastName.toLowerCase().includes(searchTerm)) ||
        (user.id && user.id.toString().includes(searchTerm))
      );
    }
  }
  
  resetSearch() {
    this.searchTerm = ''; 
    this.loadDrivers(); 
  }

}
