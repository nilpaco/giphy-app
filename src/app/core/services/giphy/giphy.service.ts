import { Giphy } from '../../store/entity/giphy/giphy.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicesModule } from '../services.module';
import { map } from 'rxjs/operators';

export const BASE_URL = 'http://api.giphy.com/v1/gifs/search?api_key=1Kot8ia8mzRIMWVoxJu5d6zPUHkNPlnz';
export const URL = 'http://api.giphy.com/v1/gifs/search?api_key=1Kot8ia8mzRIMWVoxJu5d6zPUHkNPlnz&q=';
export const TRENDING = 'http://api.giphy.com/v1/gifs/trending?api_key=1Kot8ia8mzRIMWVoxJu5d6zPUHkNPlnz';

@Injectable({
  providedIn: ServicesModule
})
export class GiphyService {

  constructor(private http: HttpClient) { }

  search(value: string, page?: number): Observable<{ giphies: Giphy[], totalCount: number }> {
    return this.http.get(page ? URL + value + '&offset=' + page : URL + value).pipe(
      map((response: any) => {
        return { giphies: response.data, totalCount: response.pagination.total_count };
      })
    );
  }

  trending(): Observable<Giphy[]> {
    return this.http.get(TRENDING).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

}
