import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Student} from '../students';

@Component({
  selector: 'app-student-details',
  template: `
    <div>{{student.name}}- {{student.age}}</div>
    <button (click)="selectSelf.emit(student)">Select</button>
    <button [style.marginLeft.px]="'10'" (click)="removeSelf.emit(student?.id)">Remove</button><br><br>`
})
export class StudentDetailsComponent {
  @Input() student: Student;
  @Output() selectSelf = new EventEmitter<Student>();
  @Output() removeSelf = new EventEmitter<number>();
}
