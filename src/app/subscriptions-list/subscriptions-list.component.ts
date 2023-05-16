import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../Admin/confirmation-dialog/confirmation-dialog.component';
import { Subscription } from '../subscription';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CreateMissionConfirmationDialogComponent } from '../create-mission-confirmation-dialog/create-mission-confirmation-dialog.component';


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
      console.log(this.driverId);
    });

    this.http.get<Subscription[]>('http://localhost:8080/WasteWise/services/AllSubscriptions')
      .subscribe(subscriptions => {
        this.subscriptions = subscriptions;
      });
  }

  onSelect(subscriptionId: number) {
    this.selectedSubscriptionId = subscriptionId;
  }
  public setDriverId(driverId: number) {
    this.driverId = driverId;
  }
  

  confirmMission() {
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
        visitDates: selectedSubscription.visitDates,
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
  
  
  
  
  
  
  

  returnToList() {
    this.router.navigate(['/driversList']);
  }

}
