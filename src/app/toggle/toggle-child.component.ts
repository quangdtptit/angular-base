import {Component} from '@angular/core';

@Component({
  selector: 'app-toggle-child',
  template: `<h1>Count: {{count}}</h1>`
})
export class ToggleChildComponent {
  count = 0;

  incCount(): void {
    this.count++;
  }
}
