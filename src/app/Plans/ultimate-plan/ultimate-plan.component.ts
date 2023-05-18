import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private subscriptionService: SubscriptionService, private router: Router) {}

  onSubmit() {
    this.subscriptionService.createSubscription(this.subscription).subscribe(
      subscription => {
        console.log('Subscription created:', subscription);
        this.router.navigate(['/subscription-confirmation']);
      },
      error => console.error('Error creating subscription:', error)
    );
  }
}
