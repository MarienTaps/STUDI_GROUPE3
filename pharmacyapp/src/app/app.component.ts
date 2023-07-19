import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'pharmacyapp';
  cookieDisplay: boolean=false;
    
  constructor(private cookieService: CookieService) {}
  // site initialisation
  ngOnInit(): void {
    var cookieValue: string;
    //this.cookieService.set('studi-groupe3','OK');
    this.cookieDisplay=true;
    if (this.cookieService.get('studi-groupe3') == 'ok') {
      this.cookieDisplay=false;
      if (((Number(Date.now()) - Number(this.cookieService.get('date')))/(3600*24*1000)) > 180) {
          this.deleteCookie();
      }
      else {
        this.cookieDisplay=false;
      }
    }
  }
  //Cookies accepted
  okCookie (): void {
    this.cookieService.set('studi-groupe3', 'ok');
    this.cookieService.set('date', Date());
    this.cookieDisplay=false;
  }
  //cookies refused
  denyCookie (): void {
    this.cookieDisplay=false;
  }
  //cookies deleted
  deleteCookie (): void {
    this.cookieService.deleteAll();
    this.cookieDisplay=false;
  }

}
