import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubscriptionService } from '../subscription.service';
import { Subscription } from '../subscription';

@Component({
  selector: 'app-subscription-form',
  templateUrl: './subscription-form.component.html',
  styleUrls: ['./subscription-form.component.css']
})
export class SubscriptionFormComponent implements OnInit {

  subscriptionForm!: FormGroup;
  subscription!: Subscription;
  planDetails: {
    basic: {
      name: string;
      price: number;
      visitDates: number;
    },
    premium: {
      name: string;
      price: number;
      visitDates: number;
    },
    ultimate: {
      name: string;
      price: number;
      visitDates: number;
    }
  } = {
    basic: {
      name: "Basic",
      price: 29.0,
      visitDates: 4
    },
    premium: {
      name: "Premium",
      price: 59.0,
      visitDates: 6
    },
    ultimate: {
      name: "Ultimate",
      price: 99.0,
      visitDates: 8
    }
  };
  
  
  visitDates: Date[] = [];

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
      numTel: ['', Validators.required],
      visitDates: this.fb.array([], Validators.required)
    });
    this.subscription = {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      additionalAddress: '',
      postalCode: 0,
      city: '',
      numTel: '',
      visitDates: [],
    };
  }

  onSubmit(): void {
    this.subscription = this.subscriptionForm.value;
    this.subscriptionService.createSubscription(this.subscription)
      .subscribe(res => console.log(res));
  }
  onPlanSelected(plan: string) {
    switch (plan) {
      case 'basic':
        this.subscription.planName = this.planDetails.basic.name;
        this.subscription.price = this.planDetails.basic.price;
        this.visitDates = this.generateVisitDates(this.planDetails.basic.visitDates);
        break;
      case 'premium':
        this.subscription.planName = this.planDetails.premium.name;
        this.subscription.price = this.planDetails.premium.price;
        this.visitDates = this.generateVisitDates(this.planDetails.premium.visitDates);
        break;
      case 'ultimate':
        this.subscription.planName = this.planDetails.ultimate.name;
        this.subscription.price = this.planDetails.ultimate.price;
        this.visitDates = this.generateVisitDates(this.planDetails.ultimate.visitDates);
        break;
      default:
        this.visitDates = [];
    }
  }
  
  
  
  generateVisitDates(visits: number): Date[] {
    const today = new Date();
    const daysPerVisit = Math.floor(30 / visits);
    return Array(visits).fill(0).map((_, i) => new Date(today.getTime() + (i * daysPerVisit * 24 * 60 * 60 * 1000)));
  }
  
  
}
