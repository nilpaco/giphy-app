import { Component, OnInit } from '@angular/core';

import { Giphy } from 'src/app/core/store/entity/giphy/giphy.model';
import { GiphyFacade } from 'src/app/core/store/entity/giphy/giphy-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'gif-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.scss']
})
export class GiphyComponent implements OnInit {
  giphy$: Observable<Giphy>;

  constructor(private giphyFacade: GiphyFacade) {
    this.giphy$ = this.giphyFacade.giphy$;
  }

  ngOnInit() {
  }

}
