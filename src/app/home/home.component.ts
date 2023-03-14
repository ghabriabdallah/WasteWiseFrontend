import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  services = [
    {
      title: 'Residential Recycling',
      image: 'images/recycling-bin.jpg',
      description: 'We offer curbside recycling pickup for households to help reduce their carbon footprint.'
    },
    {
      title: 'Commercial Recycling',
      image: 'images/commercial-waste.jpg',
      description: 'Our commercial recycling services help businesses manage their waste responsibly.'
    },
    {
      title: 'E-Waste Recycling',
      image: 'images/ewaste.jpg',
      description: 'We safely and securely recycle electronic waste to help reduce e-waste pollution.'
    }
  ];
}
