import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any = {};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.http.get<any[]>(`http://localhost:8080/WasteWise/Admin/User/${id}`)
      .subscribe(user => {
        this.user = user;
      });
  }

  updateUser(form: any) {
    if (form.valid) {
      const id = this.route.snapshot.params['id'];
      this.http.put(`http://localhost:8080/WasteWise/Admin/UpdateUser/${id}`, this.user)
        .subscribe(() => {
          this.successMessage = 'User updated successfully!';
          this.errorMessage = '';
        }, error => {
          this.successMessage = '';
          this.errorMessage = error.message || 'An unexpected error occurred';
        });
    }
  }
}
