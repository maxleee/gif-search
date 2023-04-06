import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gifs: any = [];

  constructor(private giphyService: GiphyService) {}

  getGifs(query: string, offset: number) {
    this.gifs.loading = true;
    this.giphyService
      .getGifs(query, offset)
      .subscribe((data) => (this.gifs = data.data));
  }
}
