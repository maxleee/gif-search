import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.scss'],
})
export class GifComponent implements OnInit {
  @Input() gif!: any;

  height!: string;

  isLoading: boolean = true;
  isClicked: boolean = false;

  ngOnInit(): void {
    this.height = this.gif.images.fixed_width.height;
  }

  handleLoad() {
    this.isLoading = false;
  }

  handleClick() {
    navigator.clipboard.writeText(this.gif.images.fixed_width.url);
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 2000);
  }
}
