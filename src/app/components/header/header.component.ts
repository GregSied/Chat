import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'HeaderComponent';
  hello(age = 20){
    return `to jest moja XAPKA  ${this.title} i mam ${age} lat `;
  }
}
