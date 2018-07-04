import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Weather } from '../models/weather.model';
import {AppSettings} from '../constants/app-settings';

@Injectable()
export class ForecastService {
  constructor(
    private http: HttpClient) {
  }
/**Fetch weather for the given city */
  getWeather(city): Observable<Weather[]> {
    const param = city || 'Toronto';
    return this.http.get(`${AppSettings.API_ENDPOINT}&city=${param}`).pipe(map(res => 
      res['data']
    )
  ).catch(this.errorHandler);
  }

  errorHandler() {
    return Observable.throw("Invalid City name");
  }
}
