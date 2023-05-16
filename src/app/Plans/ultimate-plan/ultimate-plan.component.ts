import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'src/app/subscription';
import { SubscriptionService } from 'src/app/subscription.service';

@Component({
  selector: 'app-ultimate-plan',
  templateUrl: './ultimate-plan.component.html',
  styleUrls: ['./ultimate-plan.component.css']
})
export class UltimatePlanComponent {
  subscription: Subscription = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    additionalAddress: '',
    postalCode: 0,
    city: '',
    numTel: '',
    planName: 'Gold',
    clearanceType: '',
    price: 0,
    paid: false,
    visitDates: ['', '', '', '','','','','']
  };

  constructor(private subscriptionService: SubscriptionService) {}

  onSubmit() {
    this.subscriptionService.createSubscription(this.subscription).subscribe(
      subscription => console.log('Subscription created:', subscription),
      error => console.error('Error creating subscription:', error)
    );
  }
}
