import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-waste',
  templateUrl: './office-waste.component.html',
  styleUrls: ['./office-waste.component.css']
})
export class OfficeWasteComponent implements OnInit {

  wasteImages: string[] = ['assets/img/eco8.jpg', 'assets/img/eco5.jpg', 'assets/img/eco6.jpg'];
  currentImageIndex: number = 0;
  wasteDescription: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam diam vel blandit bibendum.';

  ngOnInit() {
    setInterval(() => {
      const prevImageIndex = this.currentImageIndex;
      this.currentImageIndex = (this.currentImageIndex + 1) % this.wasteImages.length;
      const prevImage = document.querySelectorAll('.office-waste-image')[prevImageIndex] as HTMLElement;
      const currentImage = document.querySelectorAll('.office-waste-image')[this.currentImageIndex] as HTMLElement;
      currentImage.classList.remove('hidden');
      setTimeout(() => {
        prevImage.classList.add('fade');
        currentImage.classList.add('fade');
        setTimeout(() => {
          prevImage.classList.add('hidden');
          prevImage.classList.remove('fade');
          currentImage.classList.remove('fade');
        }, 1000);
      }, 1000);
      if (this.currentImageIndex === 0) {
        this.currentImageIndex = 0;
      }
    }, 3000);
  }
  
  

}

