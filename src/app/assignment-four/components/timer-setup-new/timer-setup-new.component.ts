import { Component, OnInit, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms'
import { timerInfo } from '../../../model/models.model';

import { timer, Subscription } from 'rxjs';
import { TimerService } from '../../../services/timer.service';
@Component({
  selector: 'app-timer-setup-new',
  templateUrl: './timer-setup-new.component.html',
  styleUrls: ['./timer-setup-new.component.scss'],
})
export class TimerSetupNewComponent implements OnInit {
  @ViewChild('form') timerForm: NgForm;
  timerValue: number;

  timerSubscription: Subscription;
  pressedStart : boolean = false;
  constructor(private timerService: TimerService) { }
  timerInfo  : timerInfo ;
  ngOnInit(): void {
    this.timerService.startTimer.subscribe( start => {
      this.pressedStart = true;
    });
    this.timerService.stopTimer.subscribe( start => {
      this.pressedStart = false;
    })
    this.timerService.getTimerInfoData.subscribe( timerInfo => {
      this.timerInfo = timerInfo;
    });
    
  }
  onSubmit(){
    if(this.timerForm.value.timerlimit>0 || this.timerInfo.timerValue>0){
      const timerVal = this.timerForm.value.timerlimit || this.timerInfo.timerValue;
      this.timerService.start(timerVal, this.pressedStart);
      this.timerForm.form.patchValue({
        timerlimit: ''
      });
      
    }
   
  }

  resetTimer(){
    this.timerService.resetTimer(0)
    
  }

}
