import { Component } from '@angular/core';
import { AppSettings } from '../../constants/app-settings';


@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  title = AppSettings.APP_TITLE;
}
