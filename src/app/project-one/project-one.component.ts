import {Component, OnInit} from '@angular/core';

interface Person {
  id: number;
  firstname: string;
  lastname: string;
  age: number;
  address: string;
}


@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent implements OnInit {

  persons: Array<Person>;
  titleForm: string;
  personControl: Person;

  constructor() {
    this.titleForm = 'Form thông tin';
    this.persons = [
      {
        id: 1,
        firstname: 'Đỗ Thanh',
        lastname: 'Quang',
        age: 23,
        address: 'An Khê, Quỳnh Phụ, Thái Bình'
      },
    ];
    this.personControl = {
      id: null,
      firstname: null,
      lastname: null,
      age: null,
      address: null
    };
  }

  ngOnInit(): void {
  }

  onClickDetails(id: number): void {
    this.titleForm = 'Thông tin person';
    this.personControl = this.persons.find(p => p.id === id);
  }

  onClickEdit(id: number): void {
    this.titleForm = 'Sửa person';
    this.personControl = this.persons.find(p => p.id === id);
  }

  onClickDelete(id: number): void {
    console.log(id);
  }

  onClickAdd(): void {
    this.titleForm = 'Thêm person';
    this.personControl = {
      id: null,
      firstname: null,
      lastname: null,
      age: null,
      address: null
    };
  }

  onSubmit(id: number): void {
    console.log(id);
  }
}
