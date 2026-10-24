import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements DoCheck {
  ngDoCheck(): void {
    console.log("Do Check in Page not fount component");
  }
}
