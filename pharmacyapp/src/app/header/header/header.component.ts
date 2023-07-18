import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 
  menuOpen: boolean = false;
  burgerOpen: boolean =true;
  openMenu() {
    this.menuOpen = !this.menuOpen;
    this.burgerOpen = !this.menuOpen;
  }
  testy() {
    alert("test")
  }
}
