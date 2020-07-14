import { Component, OnInit } from '@angular/core';
import { timerInfo } from '../../../model/models.model';
import { TimerService } from '../../../services/timer.service';

@Component({
  selector: 'app-timer-log-new',
  templateUrl: './timer-log-new.component.html',
  styleUrls: ['./timer-log-new.component.scss']
})
export class TimerLogNewComponent implements OnInit {
 timerInfo: timerInfo;
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getTimerInfoData.subscribe( timerInfo => {
      this.timerInfo = timerInfo;
    });
  }

}
 