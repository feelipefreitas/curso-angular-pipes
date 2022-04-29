import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    { name: 'Joao', cityId: 1 },
    { name: 'Laura', cityId: 2 },
  ];
}
