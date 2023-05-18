import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription-confirmation',
  templateUrl: './subscription-confirmation.component.html',
  styleUrls: ['./subscription-confirmation.component.css']
})
export class SubscriptionConfirmationComponent implements OnInit {
  countdownValue: number = 15;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    const countdownInterval = setInterval(() => {
      this.countdownValue--;
      if (this.countdownValue === 0) {
        clearInterval(countdownInterval);
        this.redirectToHomePage();
      }
    }, 1000);
  }

  redirectToHomePage(): void {
    this.router.navigate(['']); // Replace '/home' with the actual path to your home page
  }
}
