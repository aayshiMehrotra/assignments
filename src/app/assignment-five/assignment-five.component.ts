import { Component, OnInit } from '@angular/core';
import { Students, Student  } from './../model/models.model';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'app-assignment-five',
  templateUrl: './assignment-five.component.html',
  styleUrls: ['./assignment-five.component.scss']
})
export class AssignmentFiveComponent implements OnInit {
  studentsData: Array<Student>;
  studentsOriginalData: Array <Student>;
  constructor(private http: HttpService) { }
  studentHeading : Student;
  headingFilters= [];
  sortValue: string;
  sortType: string;
  ngOnInit(): void {
    this.getStudentsData();
  }

  
  getStudentsData() {
    this.http.getStudentsData().subscribe( studentsData => {
     
      this.studentsData = studentsData.students;
      this.studentHeading = this.studentsData [0];
      this.studentsOriginalData = JSON.parse(JSON.stringify(this.studentsData ))

    this.setFilterTypes();
    })
  }
  setFilterTypes() {
    for (var key in this.studentHeading) {
      if (this.studentHeading.hasOwnProperty(key)) {
          this.headingFilters.push({key, sortType:'asc'})
      }
  }
  }
  
  sortData(sortValue: string){
    this.sortValue = sortValue;
    let sortType: string = this.headingFilters.filter( heading => heading.key === sortValue)[0].sortType ;
    if(sortType === 'reset') {
      this.headingFilters.map( heading => {
        heading.key === sortValue ? (heading.sortType = 'asc' ): '' ;
      })
    }
    if(sortType === 'asc') {
      this.headingFilters.map( heading => {
        heading.key === sortValue ? (heading.sortType = 'desc' ): '' ;
      })
        
    }else if(sortType === 'desc') {
      this.headingFilters.map( heading => {
        heading.key === sortValue ? (heading.sortType = 'reset' ): '' ;
      })
    }
    this.sortType = sortType;
  }

}
