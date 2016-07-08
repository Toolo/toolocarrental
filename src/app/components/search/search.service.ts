import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Query } from './query';
import { SearchResponse } from './search-response';
import { Car } from './car';
import { CarType } from './car-type';

@Injectable()
export class SearchService {

    private static API_KEY = 'v7kpcstj4pzqw6t2htdtvubq';
    private static API_URL = 'http://api.hotwire.com/v1/search/car';
    private static FORMAT = 'JSON';
    private static STATUS_SUCCESS = '0';

    constructor(private http: Http) { }

    search(query: Query) {
        return this.http.get(SearchService.API_URL, {
            search: this.buildSearchParams(query)
        }).toPromise()
            .then(this.parseResponse)
            .catch(this.parseError);
    }

    private parseResponse(response: Response) {
        let data: SearchResponse = response.json();
        if (data.StatusCode !== SearchService.STATUS_SUCCESS) {
            throw data.Errors;
        }

        let carTypeMap = {};
        data.MetaData.CarMetaData.CarTypes.forEach((carType: CarType) => {
            carTypeMap[carType.CarTypeCode] = carType;
        });

        data.Result.forEach((result) => {
            result.CarType = carTypeMap[result.CarTypeCode];
        });
        return data.Result;
    }

    private parseError(error: any) {
        if (error && error.Error && error.Error.ErrorMessage) {
            return Promise.reject(error.Error.ErrorMessage);
        }
        return Promise.reject(error);
    }

    private buildSearchParams(query: Query) {
        let params = new URLSearchParams();
        params.set('dest', query.location);
        params.set('startdate', this.formatDate(query.startDate));
        params.set('pickuptime', query.pickupTime);
        params.set('enddate', this.formatDate(query.endDate));
        params.set('dropofftime', query.dropoffTime);
        params.set('apikey', SearchService.API_KEY);
        params.set('format', SearchService.FORMAT);
        return params;
    }

    private formatDate(angularDate: string) {
        let date = new Date(angularDate);
        let usFormattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: '2-digit', year: 'numeric' });
        return usFormattedDate;
    }

}