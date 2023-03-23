import { Component } from '@angular/core';

@Component({
  selector: 'app-commercial-waste',
  templateUrl: './commercial-waste.component.html',
  styleUrls: ['./commercial-waste.component.css']
})
export class CommercialWasteComponent {
  currentImageIndex = 0;
images = [
'assets/img/commercial1.jpeg',
'assets/img/commercial2.jpeg',
'assets/img/commercial3.jpeg',
'assets/img/commercial4.jpg',
'assets/img/commercialwaste.jpg',
]
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
