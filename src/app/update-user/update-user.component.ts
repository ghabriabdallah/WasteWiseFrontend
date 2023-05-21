import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateMissionConfirmationDialogComponent } from '../create-mission-confirmation-dialog/create-mission-confirmation-dialog.component';


@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any = {};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http.get<any[]>(`http://localhost:8080/WasteWise/Admin/User/${id}`)
      .subscribe(user => {
        this.user = user;
      });
  }

  async updateUser(form: any) {
  if (form.valid) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.user.password, salt);
    this.user.password = hashedPassword;
    const id = this.route.snapshot.params['id'];

    const dialogRef = this.dialog.open(CreateMissionConfirmationDialogComponent, {
      width: '350px',
      data: 'Are you sure you want to update this account?'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.put(`http://localhost:8080/WasteWise/Admin/UpdateUser/${id}`, this.user)
          .subscribe(() => {
            this.successMessage = 'User updated successfully!';
            this.errorMessage = '';
            setTimeout(() => {
              this.router.navigate(['/adminDashboard']);
            }, 2000);
          }, error => {
            this.successMessage = '';
            this.errorMessage = error.message || 'An unexpected error occurred';
          });
      }
    });
  }
}

}
