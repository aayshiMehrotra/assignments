import { Component, OnInit} from '@angular/core';
import { timerInfo } from '../../../model/models.model';
import { TimerService } from '../../../services/timer.service';

@Component({
  selector: 'app-timer-analysis-new',
  templateUrl: './timer-analysis-new.component.html',
  styleUrls: ['./timer-analysis-new.component.scss'],
})
export class TimerAnalysisNewComponent implements OnInit {
  timerInfo: timerInfo;
  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
    this.timerService.getTimerInfoData.subscribe( timerInfo => {
      this.timerInfo = timerInfo;
    });
  }

}
