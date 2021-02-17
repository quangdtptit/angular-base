import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit, OnChanges {

  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'red';
  @Input() progress = 50;

  constructor() {
    console.log('constructor', {
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
      progress: this.progress
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit', {
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
      progress: this.progress
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', {
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
      progress: this.progress
    });
  }
}
