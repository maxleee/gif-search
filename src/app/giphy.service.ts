import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  private baseApiUrl =
    'https://api.giphy.com/v1/gifs/search?api_key=lSze0I5gVhijbTDeDmvYss5uOUAJ5zcH&limit=25&rating=g&lang=en';

  constructor(private http: HttpClient) {}

  getGifs(query: string, offset?: number | undefined): Observable<any> {
    const url = `${this.baseApiUrl}&q=${query}&offset=${offset}`;
    return this.http.get(url);
  }
}
