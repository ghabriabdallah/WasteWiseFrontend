import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  backgroundImageUrls = [
    'https://source.unsplash.com/1600x900/?waste',
    'https://source.unsplash.com/1600x900/?recycle',
    'https://source.unsplash.com/1600x900/?environment',
  ];

    currentImageIndex = 0;
    images = [
      'https://source.unsplash.com/1600x900/?waste',
      'https://source.unsplash.com/1600x900/?garbage',
      'https://source.unsplash.com/1600x900/?recycling',
    ];
    
    ngOnInit() {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 2000);
    }
  
    getHeroStyle() {
      return {
        'background-image': `url(${this.images[this.currentImageIndex]})`,
        'background-size': 'cover',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'position': 'relative',
        'transition': 'background-image 1s ease-in-out'
      };
    }
  }