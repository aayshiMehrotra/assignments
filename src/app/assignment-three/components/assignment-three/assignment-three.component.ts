import { Component, OnInit, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { timerInfo } from '../../../model/models.model';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.scss']
})
export class AssignmentThreeComponent implements OnInit {
  constructor() { }
  timerValue: number ;
  timerInfo: timerInfo = {
    "clicksTimeStamp": [],
    "startClicks": 0,
    "pauseClicks": 0,
    "clicksTimerValues": [],
    "timerValue": 0
  };
  ngOnInit(): void {
  }

  onSettingTimer(timerInfo: timerInfo) {
   this.timerInfo = timerInfo;
  }
 
}
