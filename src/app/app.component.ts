import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    { name: 'Joao', cityId: 1, status: 0 },
    { name: 'Laura', cityId: 2, status: 1 },
  ];

  posts = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
  ];

  constructor() {
    //Força o Change Detection
    
    // setTimeout(() => {
    //   console.log('timeout');
    //   this.users[0].status = 1;
    // }, 3000);
  }

  returnUserStatus(userStatus: number): string {
    // console.log('returnUserStatus userStatus', userStatus);
    if(userStatus === 0) {
      return 'Inativo';
    } else if(userStatus === 1) {
      return 'Ativo';
    } else {
      return '-';
    }
  }
}
