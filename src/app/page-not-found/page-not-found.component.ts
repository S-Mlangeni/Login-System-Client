import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  template: `
    <h1>
      Page Not Found
    </h1>
    <div><a routerLink="/login" routerLinkActive="active">Login</a> | <a routerLink="/registration" routerLinkActive="active">Registration</a></div>
  `,
  styles: [
  ]
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
