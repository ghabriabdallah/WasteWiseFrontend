import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from '../../subscription.service';
import { Subscription } from '../../subscription';

@Component({
  selector: 'app-premium-plan',
  templateUrl: './premium-plan.component.html',
  styleUrls: ['./premium-plan.component.css']
})
export class PremiumPlanComponent {
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
    planName: '',
    price: 0,
    paid: false,
    visitDates: ['', '', '', '','','']
  };

  constructor(private subscriptionService: SubscriptionService) {}

  onSubmit() {
    this.subscriptionService.createSubscription(this.subscription).subscribe(
      subscription => console.log('Subscription created:', subscription),
      error => console.error('Error creating subscription:', error)
    );
  }
}