import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  sel3: string = "";
  menuOpen: boolean = false;
  burgerOpen: boolean =true;
  openMenu() {
    this.menuOpen = !this.menuOpen;
    this.burgerOpen = !this.menuOpen;
  }
  langFr: boolean = true;
  langGb: boolean = false;
  langDe: boolean = false;
  clickFr() {
    alert("Fr")
  }
}
