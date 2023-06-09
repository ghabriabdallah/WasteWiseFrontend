import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'src/app/subscription';
import { SubscriptionService } from 'src/app/subscription.service';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent {
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
    planName: 'Bronze',
    clearanceType: '',
    price: 0,
    paid: false,
    visitDates: ['', '', '', '']
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