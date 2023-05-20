import { Component, Input } from '@angular/core';
import { GIFObject } from 'giphy-api';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.scss'],
})
export class ResultGridComponent {
  @Input() gifs!: GIFObject[];
  @Input() error!: any;
  autoplay: boolean = true;
}
