import { Component, OnInit } from '@angular/core';
import { timerInfo } from '../../../model/models.model';
import { TimerService } from '../../../services/timer.service';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.scss']
})
export class AssignmentFourComponent implements OnInit {

  constructor(private timerService: TimerService) { }
  timerValue: number ;
  timerInfo: timerInfo ;
  ngOnInit(): void {
    this.timerService.timerInfoData.subscribe( timerInfo => {
      this.timerInfo = timerInfo;
    });
  }

}
