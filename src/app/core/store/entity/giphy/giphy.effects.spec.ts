import { GiphyEffects } from './giphy.effects';
import { Observable } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';

describe('GiphyEffects', () => {
  const actions$: Observable<any> = new Observable();
  let effects: GiphyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GiphyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<GiphyEffects>(GiphyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
