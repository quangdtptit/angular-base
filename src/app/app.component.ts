import {Component} from '@angular/core';

interface User {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User = {
    name: 'DO THANH QUANG',
    age: 23
  };

  isDanger = true;
  isWarning = true;

  percent = 70;
}
