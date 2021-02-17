import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, VERSION} from '@angular/core';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string;

  constructor() {
    console.log('Contructor');
  }

  public title: string = VERSION.full;

  public user = {
    name: 'DO THANH QUANG',
    age: 23
  };

  public inputExp = {
    type: 'text',
    value: 'Enter ...'
  };

  public handleClick(): void {
    console.log('Hello world');
  }

  ngOnDestroy(): void {
    console.log('ON DESTROY');
  }

  ngOnInit(): void {
    console.log('ON INIT');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ON CHANGE', name);
  }

}
