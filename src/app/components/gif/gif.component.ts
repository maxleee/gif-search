import { Component, Input, OnInit } from '@angular/core';
import { GIFObject } from 'giphy-api';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss'],
})
export class GifComponent implements OnInit {
  @Input() gif!: GIFObject;
  @Input() autoplay: boolean = true;

  height!: string;

  isLoading: boolean = true;
  isClicked: boolean = false;

  ngOnInit(): void {
    this.height = this.gif.images.fixed_width.height;
  }

  handleLoad(): void {
    this.isLoading = false;
  }

  handleClick(): void {
    navigator.clipboard.writeText(this.gif.images.fixed_width.url);
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 2000);
  }

  handleKeydown(e: any): void {
    if (e.key === 'Enter') {
      this.handleClick();
    } else return;
  }
}
