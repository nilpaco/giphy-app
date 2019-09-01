import { Component } from '@angular/core';

@Component({
  selector: 'gif-not-found',
  template: `
    <h1>Giphy not found</h1>
  `,
  styles: [
    `
      h1 {
        display: block;
        text-align: center;
      }
    `
  ]
})
export class NotFoundComponent {

  constructor() {
  }

}
