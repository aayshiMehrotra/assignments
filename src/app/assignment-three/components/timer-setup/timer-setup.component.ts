import { Component, OnInit, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import {NgForm} from '@angular/forms'
import { timerInfo } from '../../../model/models.model';

import { timer, Subscription } from 'rxjs';
@Component({
  selector: 'app-timer-setup',
  templateUrl: './timer-setup.component.html',
  styleUrls: ['./timer-setup.component.scss'],
})
export class TimerSetupComponent implements OnInit {
  @ViewChild('form') timerForm: NgForm;
  @Output() setTimer = new EventEmitter<timerInfo>();
  timerValue: number;

  timerSubscription: Subscription;
  pressedStart : boolean = false;
  constructor() { }
  timerInfo  : timerInfo = {
    "clicksTimeStamp": [],
    "startClicks": 0,
    "pauseClicks": 0,
    "clicksTimerValues": [],
    "timerValue": 0
  } ;
  ngOnInit(): void {
    this.resetTimerInfo();
  }
  resetTimerInfo() {
    this.timerInfo.timerValue =  0;
    this.timerValue = 0;
  }
  onSubmit(){
    if(!this.pressedStart && (this.timerForm.value.timerlimit>0 || this.timerValue>0)){
      const that = this;
      const timerVal = this.timerForm.value.timerlimit || this.timerValue;
      const numbers = timer(timerVal, 1000);
      this.timerValue = timerVal;
      this.timerSubscription = timer(timerVal, 1000).subscribe(x => {
        that.timerValue = timerVal - x -1;
        if(that.timerValue < 0){
          this.timerSubscription.unsubscribe();
        this.pressedStart = false;
        }else{
          that.timerInfo.timerValue = that.timerValue 
          that.setTimer.emit(that.timerInfo);
        }
        
      });

      this.pressedStart = true;
      this.timerInfo.startClicks++;
      this.timerInfo.clicksTimeStamp.push(`Started at ${new Date()}`);
      this.timerInfo.clicksTimerValues.push(`Started at ${this.timerForm.value.timerlimit || that.timerValue}`);
      this.timerInfo.timerValue = this.timerForm.value.timerlimit || that.timerValue;
      this.setTimer.emit(this.timerInfo);

      this.timerForm.form.patchValue({
        timerlimit: ''
      });
      
    }else if(this.pressedStart && this.timerValue>0) {
      this.timerSubscription.unsubscribe();
      this.pressedStart = false;
      this.timerInfo.pauseClicks++;
      this.timerInfo.clicksTimeStamp.push(`Paused at ${new Date()}`);
      this.timerInfo.clicksTimerValues.push(`Paused at ${this.timerValue}`);
      this.timerInfo.timerValue = this.timerValue;

      this.setTimer.emit(this.timerInfo);
      
    }
    

   
  }

  resetTimer(){
    this.timerSubscription.unsubscribe();
    this.timerInfo.clicksTimeStamp.push(`Reset at ${new Date()}`);
    this.resetTimerInfo();
    this.setTimer.emit(this.timerInfo);
    this.pressedStart = false;

    this.timerValue = 0;
    
  }

}
