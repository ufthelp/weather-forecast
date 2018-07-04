import { Component } from '@angular/core';
import { AppSettings } from '../../constants/app-settings';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  WEATHER_ICON = AppSettings.WEATHER_ICON;
}
