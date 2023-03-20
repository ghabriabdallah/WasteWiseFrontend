import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-waste',
  templateUrl: './house-waste.component.html',
  styleUrls: ['./house-waste.component.css']
})
export class HouseWasteComponent implements OnInit {
  currentImageIndex = 0;
  images = [
    'https://www.shutterstock.com/image-photo/woman-putting-banana-peel-recycling-600w-503888032.jpg',  
    'https://www.shutterstock.com/image-vector/waste-collection-segregation-recycling-infographic-600w-1375164935.jpg', 
    'https://www.shutterstock.com/image-vector/containers-garbage-different-types-cans-600w-714563575.jpg',  
   
  ];

  ngOnInit() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }, 3000); // Change interval to 3000ms (3 seconds)
  }
}
