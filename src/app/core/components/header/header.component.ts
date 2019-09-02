import { Component } from '@angular/core';
import { GiphyFacade } from '../../store/entity/giphy/giphy-facade.service';

@Component({
  selector: 'gif-header',
  styleUrls: ['./header.component.scss'],
  template: `
    <img class="giphy-logo" alt="giphy-logo" src="assets/icons/logo.png" (click)="goToDashboard()" />
    <div class="input-wrapper">
      <input
        data-cy="header"
        type="text"
        aria-label="search"
        [(ngModel)]="value"
        (ngModelChange)="search($event)"
        placeholder="Search for a gif..."
      />
      <i *ngIf="value" class="close" (click)="clearSearch()"></i>
    </div>
  `
})
export class HeaderComponent {
  value: string;

  constructor(private giphyFacade: GiphyFacade) {}

  search(value: string) {
    this.giphyFacade.search(value);
  }

  clearSearch() {
    this.value = '';
    this.giphyFacade.trending();
  }

  goToDashboard() {
    this.giphyFacade.trending();
  }
}
