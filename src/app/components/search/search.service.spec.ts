import {
    it,
    inject,
    describe,
    beforeEach,
    addProviders,
} from '@angular/core/testing';
import { JSONP_PROVIDERS } from '@angular/http';
import { SearchService } from './search.service';
import { Query } from './query';

describe('SearchService', () => {

    let searchService: SearchService;

    beforeEach(() => addProviders([JSONP_PROVIDERS, SearchService]));

    beforeEach(inject([SearchService], (s:SearchService) => searchService = s));

    it('SearchService service should exist', () => {
        expect(searchService).toBeDefined();
    });

    it('SearchService get method should return Cars when proper params are given', (done: any) => {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let afterTomorrow = new Date(tomorrow.getTime());
        afterTomorrow.setDate(afterTomorrow.getDate() + 1);
        let query:Query = {
            location: 'JFK',
            startDate: getApiDate(tomorrow),
            pickupTime: '10:30',
            endDate: getApiDate(afterTomorrow),
            dropoffTime: '10:30'
        };
        searchService.search(query)
            .then((cars) => {
                expect(cars.length).toBeGreaterThan(0);
                done();
            })
            .catch((error) => {
                done('should never get here');
            });
    });

    function getApiDate(date: Date): string {
        let month = date.getMonth().toString();
        let day = date.getDate().toString();
        let year = date.getFullYear();
        month = month.length === 1 ? `0${month}` : month;
        day = day.length === 1 ? `0${day}` : day;
        return `${month}/${day}/${year}`;
    }

    it('SearchService get method should return an error when invalid params are given', (done: any) => {
        let invalidQuery:Query = {
            location: 'JFK',
            startDate: '2016/07/08',
            pickupTime: '2016/07/09',
            endDate: '10:15',
            dropoffTime: '10:30'
        };
        searchService.search(invalidQuery)
            .then((cars) => {
                done('should never get here');
            })
            .catch((error) => { 
                expect(error).toBeDefined();
                done();
            });
    });
});
