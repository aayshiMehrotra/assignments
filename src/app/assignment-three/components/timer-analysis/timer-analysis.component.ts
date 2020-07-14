import { Component, OnInit, Input } from '@angular/core';
import { timerInfo } from '../../../model/models.model';

@Component({
  selector: 'app-timer-analysis',
  templateUrl: './timer-analysis.component.html',
  styleUrls: ['./timer-analysis.component.scss'],
})
export class TimerAnalysisComponent implements OnInit {
  @Input() timerInfo: timerInfo;
  constructor() { }

  ngOnInit(): void {
  }

}
