import { Component } from '@angular/core';

import { Query } from './query';
import { SearchService } from './search.service';
import { Car } from './car';
import { CarListComponent } from './car-list.component';

@Component({
  selector: 'to-search',
  providers: [ SearchService],
  directives: [ CarListComponent ],
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html'
})
export class SearchComponent {

  query: Query = this.getDefaultQuery();

  error: string;
  results: Array<Car>;
  searching = false;

  constructor(private searchService: SearchService) { }

  search() {
    this.error = '';
    this.searching = true;
    this.searchService.search(this.query)
      .then(results => this.results = results)
      .catch(err => this.error = err)
      .then(() => this.searching = false);
  }

  clear() {
    this.query = this.getDefaultQuery();
    this.results = null;
  }

  private getDefaultQuery(): Query {
    return {
      location: '',
      startDate: this.getDefaultStartDate(),
      endDate: this.getDefaultEndDate(),
      pickupTime: '08:00',
      dropoffTime: '20:00'
    }
  }

  private getDefaultStartDate() {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    return this.parseDate(date);
  }

  private getDefaultEndDate() {
    let date = new Date();
    date.setDate(date.getDate() + 2);
    return this.parseDate(date);
  }

  private parseDate(date: Date) {
    let [month, day, year] = date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' }).split('/');
    return [year, month, day].join('-');
  }

}
