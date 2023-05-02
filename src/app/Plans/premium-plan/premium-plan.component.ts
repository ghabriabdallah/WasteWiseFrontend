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
  subscriptionForm!: FormGroup;
  subscription!: Subscription;
  visitDates: Date[] = [new Date(), new Date(), new Date(), new Date(), new Date(), new Date()];

  constructor(
    private fb: FormBuilder,
    private subscriptionService: SubscriptionService
  ) { }

  ngOnInit(): void {
    this.subscriptionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      additionalAddress: [''],
      postalCode: ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],
      city: ['', Validators.required],
      numTel: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const subscription = {
      ...this.subscriptionForm.value,
      visitDates: this.visitDates
    };
    this.subscriptionService.createSubscription(subscription)
      .subscribe(res => console.log(res));
  }
}
