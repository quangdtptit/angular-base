import {Component, ViewChild} from '@angular/core';
import {ToggleChildComponent} from './toggle-child.component';

@Component({
  selector: 'app-toggle-parent',
  template: `
    <app-toggle-child #childComponent></app-toggle-child>
    <button (click)="incCountParent($event)">Increase count</button>`
})
export class ToggleParentComponent {

  @ViewChild('childComponent') childComponent: ToggleChildComponent;

  incCountParent(event: any): void {
    this.childComponent.incCount();
  }
}
