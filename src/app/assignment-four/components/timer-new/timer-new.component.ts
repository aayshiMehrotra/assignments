import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../../services/timer.service';

@Component({
  selector: 'app-timer-new',
  templateUrl: './timer-new.component.html',
  styleUrls: ['./timer-new.component.scss']
})
export class TimerNewComponent implements OnInit {

  constructor(private timerService : TimerService) { }
  timerValue: number;
  ngOnInit(): void {
    this.timerService.getTimerInfoData.subscribe( timerInfo => {
      this.timerValue = timerInfo.timerValue;
    });
  }

}
