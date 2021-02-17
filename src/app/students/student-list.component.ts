import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Student, students} from '../students';

@Component({
  selector: 'app-student',
  template: `
    <ng-container *ngFor="let std of students">
      <app-student-details [student]="std" (selectSelf)="onSelected($event)" (removeSelf)="onRemove($event)"></app-student-details>
    </ng-container><h1>SELECT {{selectStd?.name}}</h1>`
})
export class StudentListComponent implements OnInit, OnChanges {
  students = students;
  selectStd: Student = students[0];

  onSelected(student: Student): void {
    this.selectStd = student;
  }

  onRemove(id: number): void {
    this.students = this.students.filter(s => s.id !== id);
    if (this.selectStd.id === id) {
      this.selectStd = this.students[0];
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
