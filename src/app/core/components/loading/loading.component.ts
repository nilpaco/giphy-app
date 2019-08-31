import { Component } from '@angular/core';

@Component({
    selector: 'gif-loading',
    template: `<div class="loading">
                <img src="assets/loading.svg" alt="loading">
              </div>`
})
export class LoadingComponent {

    constructor() { }
}
