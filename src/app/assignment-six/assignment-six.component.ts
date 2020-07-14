import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-assignment-six',
  templateUrl: './assignment-six.component.html',
  styleUrls: ['./assignment-six.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AssignmentSixComponent implements OnInit {
  limit: number = 12;
  initialLimit : number = 0;
  divsLoaded : Array<number> = [];
  styleHeight: number = 200;
  styleWidth: number =200;
  constructor() { }

  ngOnInit(): void {
  }

  onLoadMore() {
    this.divsLoaded =[];
    const total = this.limit + this.initialLimit;
    for(let i = 0 ; i< total ; i++ ){
      this.divsLoaded.push(i+1)
    }
    this.initialLimit = total;
  }

  alertNumber(divNumber: number) {
    alert(divNumber+' is clicked');
  }
}
