import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-waste',
  templateUrl: './house-waste.component.html',
  styleUrls: ['./house-waste.component.css']
})
export class HouseWasteComponent implements OnInit {

  

    currentImageIndex = 0;
    images = [
      'assets/img/house9.jpg',
      'assets/img/house8.jpg',
      'assets/img/house10.jpg',
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
