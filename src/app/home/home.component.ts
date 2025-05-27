import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private router: Router){

  }

  goTo(){
    this.router.navigate(['/test-page', 1])
  }

  sendQueryParams(){
    this.router.navigate(['/test-page'], {
      queryParams: {
        id: 3,
        name: 'John',
        surname: 'Doe'
      }
    })
  }
}
