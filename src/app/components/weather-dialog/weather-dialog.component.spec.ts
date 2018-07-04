import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDialogComponent } from './weather-dialog.component';

describe('WeatherDialogComponent', () => {
  let component: WeatherDialogComponent;
  let fixture: ComponentFixture<WeatherDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
