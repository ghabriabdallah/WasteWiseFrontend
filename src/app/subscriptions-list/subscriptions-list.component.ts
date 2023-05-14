import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../Admin/confirmation-dialog/confirmation-dialog.component';
import { Subscription } from '../subscription';
import { MatCheckboxModule } from '@angular/material/checkbox';


@Component({
  selector: 'app-subscriptions-list',
  templateUrl: './subscriptions-list.component.html',
  styleUrls: ['./subscriptions-list.component.css']
})
export class SubscriptionsListComponent implements OnInit {

  subscriptions!: Subscription[];
  selectedSubscriptionId!: number;
  driverId!: number;

  constructor(private http: HttpClient, private router: Router, private activatedRoute: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.driverId = Number(params.get('id'));
    });

    this.http.get<Subscription[]>('http://localhost:8080/WasteWise/services/AllSubscriptions')
      .subscribe(subscriptions => {
        this.subscriptions = subscriptions;
      });
  }

  onSelect(subscriptionId: number) {
    this.selectedSubscriptionId = subscriptionId;
  }

  confirmMission() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Are you sure you want to confirm this mission?'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const selectedSubscription = this.subscriptions.find(s => s.id === this.selectedSubscriptionId);
        if (selectedSubscription) {
          const missionData = {
            driverId: this.driverId,
            subscription: selectedSubscription,
            pickupAddress: selectedSubscription.address,
            additionalAddress: selectedSubscription.additionalAddress,
            postalCode: selectedSubscription.postalCode,
            city: selectedSubscription.city,
            numTel: selectedSubscription.numTel,
            subscriptionId: selectedSubscription.id,
            missionStatus: 'NEW',
            missionCreationDate: new Date().toISOString()
          };
          this.http.post('http://localhost:8080/WasteWise/createMission', missionData)
            .subscribe(() => {
              this.router.navigate(['/missions']);
            });
        }
      }
    });
  }
  
  
  
  

  returnToList() {
    this.router.navigate(['/driversList']);
  }

}
