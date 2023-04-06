import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-grid',
  templateUrl: './result-grid.component.html',
  styleUrls: ['./result-grid.component.scss'],
})
export class ResultGridComponent {
  @Input() gifs: any;
  autoplay: boolean = true;
}
