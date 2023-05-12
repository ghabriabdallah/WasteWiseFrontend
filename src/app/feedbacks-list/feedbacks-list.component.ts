import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../Admin/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-feedbacks-list',
  templateUrl: './feedbacks-list.component.html',
  styleUrls: ['./feedbacks-list.component.css']
})
export class FeedbacksListComponent {

  feedbacks!: any[];

  constructor(private http: HttpClient, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/WasteWise/Admin/AllFeedbacks')
      .subscribe(feedbacks => {
        this.feedbacks = feedbacks;
      });
  }
  
  deleteFeedback(id: number) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Are you sure you want to delete this feedback?'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.http.delete(`http://localhost:8080/WasteWise/Admin/deleteFeedback/${id}`)
          .subscribe(() => {
            this.feedbacks = this.feedbacks.filter(feedback => feedback.id !== id);
          });
      }
    });
  }

}
