import { Component } from '@angular/core';

import notify from 'devextreme/ui/notify'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';

  someNotification(data) {
      notify(data, 'info', 3000)
  }
}
