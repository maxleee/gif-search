import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';
import { GIFObject, MultiResponse } from 'giphy-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gifs!: GIFObject[];
  error!: any;

  constructor(private giphyService: GiphyService) {}

  getGifs(query: string, offset: number) {
    this.giphyService.getGifs(query, offset).subscribe({
      next: (data) => (this.gifs = data.data),
      error: (error) => {
        console.log(error);
        this.error = error;
      },
    });
  }
}
