import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {

  constructor(private cookieService: CookieService) {}

  //cookies deleted
  deleteCookie (): void {
    this.cookieService.delete('studi-groupe3','/','localhost');
    }

}
