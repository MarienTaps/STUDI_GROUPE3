import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})

export class AccueilComponent  {

 slides: string [] = ['./assets/Images/images.jpg', './assets/Images/Image1.jpg', './assets/Images/image2.jpg', './assets/Images/image3.jpg'];
  i= 0;

  getSlide() {
    return this.slides[this.i];
  }

  getPrev() {
    this.i = this.i===0 ? this.slides.length -1: this.i - 1;
  }
 
  getNext() {
    this.i = this.i===this.slides.length-1 ? 0 : this.i + 1;
  }

}
