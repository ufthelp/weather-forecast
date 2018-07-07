import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ForecastService } from '../../services/forecast.service';
import { Weather } from '../../models/weather.model';
@Component({
  selector: 'app-search-weather',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchWeatherComponent implements AfterViewInit {
  public errorMsg;
  public data;
  hideTable = true;
  displayedColumns = ['temp', 'weather.description', 'timezone', 'more'];
  form;
  weatherData$: Observable<Weather[]>;

  @Input()
  text = 'City Name';

  @ViewChild('input') input: ElementRef;

  constructor(private forecastService: ForecastService, private fb: FormBuilder) {
    this.form = fb.group({
      city: ['', Validators.required]
    });
  }

  /** get weather for given city with debounceTime = 350ms*/
  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(350),
        distinctUntilChanged(),
        tap(() => {
          const weather$ = this.forecastService.getWeather(this.input.nativeElement.value);
          this.weatherData$ = weather$.pipe(map(res => res));
          weather$.subscribe(
            data => { this.data = data; this.errorMsg = ''; this.hideTable = false; },
            error => { this.errorMsg = error; this.hideTable = true; }
          );
        })
      )
      .subscribe();
  }

  /**
  * This is the resetSearch function and reset the searchInputField to empty
  * @param searchInputField searchInputField as a parameter
  */
  resetSearch(input) {
    input.value = '';
    this.form.setErrors({ 'invalid': true });
    this.errorMsg = '';
    this.hideTable = true;
  }
}
