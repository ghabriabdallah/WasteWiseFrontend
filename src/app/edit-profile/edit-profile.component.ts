import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as bcrypt from 'bcryptjs';
import { MatDialog } from '@angular/material/dialog';
import { CreateMissionConfirmationDialogComponent } from '../create-mission-confirmation-dialog/create-mission-confirmation-dialog.component';
import { AuthService } from '../auth.service';




@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  user: any = {};
  successMessage: string = '';
  errorMessage: string = '';


  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthService,
    public dialog: MatDialog
  ) {}
  

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http.get<any[]>(`http://localhost:8080/WasteWise/Admin/User/${id}`)
      .subscribe(user => {
        this.user = user;
      });
  }

  async editProfile(form: any) {
    if (form.valid) {
      const id = this.route.snapshot.params['id'];
  
      const dialogRef = this.dialog.open(CreateMissionConfirmationDialogComponent, {
        width: '350px',
        data: 'Are you sure you want to edit your profile?'
      });
  
      dialogRef.afterClosed().subscribe(async result => {
        if (result) {
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(this.user.password, salt);
          this.user.password = hashedPassword;
  
          this.http.put(`http://localhost:8080/WasteWise/Admin/EditProfile/${id}`, this.user)
            .subscribe(() => {
              this.successMessage = 'Profile updated successfully!';
              this.errorMessage = '';
              setTimeout(() => {
                this.router.navigate(['/profile']);
              }, 2000);
            }, error => {
              this.successMessage = '';
              this.errorMessage = error.message || 'An unexpected error occurred';
            });
        }
      });
    }
  }
  
  
  isDriver(): boolean {
    const role = this.authService.getUserRole();
    return role === 'DRIVER';
  }
}
