import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-office-waste',
templateUrl: './office-waste.component.html',
styleUrls: ['./office-waste.component.css']
})
export class OfficeWasteComponent implements OnInit {

currentImageIndex = 0;
images = [
'assets/img/officewaste.jpg',
'assets/img/office1.jpeg',
'assets/img/office2.jpg',
'assets/img/office3.jpg',
'assets/img/office4.jpg',


];
ngOnInit() {
  setInterval(() => {
  this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }, 4000);
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