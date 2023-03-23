
import { Component } from '@angular/core';

@Component({
selector: 'app-building-waste',
templateUrl: './building-waste.component.html',
styleUrls: ['./building-waste.component.css']
})
export class BuildingWasteComponent {
currentImageIndex = 0;
images = [
'assets/img/building.png',
'assets/img/building2.webp',
'assets/img/building3.webp',
'assets/img/building5.jpeg',
'assets/img/buildingwaste.jpg',
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