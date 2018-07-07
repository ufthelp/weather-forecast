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

  /**
  * This is the getWeather function
  * @param city takes city as a parameter
  * @returns returns an object of weather for the given city
  */
  getWeather(city): Observable<Weather[]> {
    const param = city || AppSettings.DEFAULT_CITY;
    return this.http.get(`${AppSettings.API_ENDPOINT}&city=${param}`).pipe(map(res =>
      res['data']
    )
  ).catch(this.errorHandler);
  }

   /**
  * This is the errorHandler function
  * @returns returns an error
  */
  errorHandler() {
    return Observable.throw(AppSettings.ERROR_MSG);
  }
}
