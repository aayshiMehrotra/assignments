import { Component, OnInit, Input } from '@angular/core';
import { timerInfo } from '../../../model/models.model';

@Component({
  selector: 'app-timer-log',
  templateUrl: './timer-log.component.html',
  styleUrls: ['./timer-log.component.scss']
})
export class TimerLogComponent implements OnInit {
  @Input() timerInfo: timerInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
