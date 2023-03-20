import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-waste',
  templateUrl: './house-waste.component.html',
  styleUrls: ['./house-waste.component.css']
})
export class HouseWasteComponent implements OnInit {
  

  currentImageIndex = 0;
  images = [    'src/assets/img/eco2.jpg',  
    'src/assets/img/eco3.jpg', 
       'src/assets/img/house waste.png',  
         'src/assets/img/housewaste.jpg',
             'src/assets/img/housewaste4.png'];

    
    ngOnInit() {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }, 2000);
    }
  
}

