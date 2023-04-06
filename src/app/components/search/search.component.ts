import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  searchTerm: string = '';

  handleSubmit() {
    this.onSubmit.emit(this.searchTerm);
  }
}
