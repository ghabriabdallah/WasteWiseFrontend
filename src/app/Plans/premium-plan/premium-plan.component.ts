import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from '../../subscription.service';
import { Subscription } from '../../subscription';
import { Router } from '@angular/router';

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
    planName: 'Silver',
    clearanceType: '',
    price: 0,
    paid: false,
    visitDates: ['', '', '', '','','']
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