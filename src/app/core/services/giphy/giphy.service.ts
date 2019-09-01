import { GIF_URL, SEARCH_URL, TRENDING_URL } from './api-constants';

import { Giphy } from '../../store/entity/giphy/giphy.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesModule } from '../services.module';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: ServicesModule
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  search(value: string, page?: number): Observable<{ giphies: Giphy[], totalCount: number }> {
    const params = {
      q: value,
      offset: page ? page.toString() : '0'
    };
    return this.http.get(SEARCH_URL, {
      params
    }).pipe(
      map((response: any) => {
        return { giphies: response.data, totalCount: response.pagination.total_count };
      })
    );
  }

  trending(): Observable<Giphy[]> {
    return this.http.get(TRENDING_URL).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  loadOne(giphyId: string): Observable<Giphy> {
    return this.http.get(GIF_URL(giphyId)).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

}
