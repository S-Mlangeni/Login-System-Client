import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  template: `
    <h1>
      Welcome!
    </h1>
    <div><a routerLink="/login" routerLinkActive="active">Login</a> | <a routerLink="/registration" routerLinkActive="active">Registration</a></div>
  `,
  styles: [
  ]
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
