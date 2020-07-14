import { Injectable } from '@angular/core';
import { timer, Subject, Observable, Subscription, BehaviorSubject } from 'rxjs';
import { timerInfo } from '../model/models.model';

@Injectable({
  providedIn: 'root'
})
export class TimerService  {
  timerValue: number;
  timerInfo: timerInfo = {
    "clicksTimeStamp": [],
    "startClicks": 0,
    "pauseClicks": 0,
    "clicksTimerValues": [],
    "timerValue": 0
  };
  constructor() { 
    
  }
  timerInfoData = new BehaviorSubject<timerInfo>(this.timerInfo);
  startTimer = new Subject<boolean>();
  stopTimer = new Subject<boolean>();
  timerSubscription: Subscription;
  getTimerInfoData = this.timerInfoData.asObservable();
  start(timerVal: number, start: boolean) {
    if(!start && timerVal >0){
      this.startTimer.next(true);
      const that = this;
      const numbers = timer(timerVal, 1000);
      this.timerSubscription = timer(timerVal, 1000).subscribe(x => {
        that.timerInfo.timerValue = timerVal - x -1;
        
          
        if(that.timerInfo.timerValue < 0){
          this.stop();
        
        }else{
          that.timerInfoData.next(this.timerInfo);
          
        }

      });
      this.timerInfo.startClicks++;
      this.timerInfo.clicksTimeStamp.push(`Started at ${new Date()}`);
      this.timerInfo.timerValue = timerVal;

      this.timerInfo.clicksTimerValues.push(`Started at ${timerVal}`);
      this.timerInfoData.next(this.timerInfo);
    }else {
      this.timerSubscription.unsubscribe();
      this.timerInfo.pauseClicks++;
      this.timerInfo.clicksTimeStamp.push(`Paused at ${new Date()}`);
      this.timerInfo.clicksTimerValues.push(`Paused at ${this.timerInfo.timerValue}`);
      this.timerInfoData.next(this.timerInfo);
      this.stop();
    }
  }

  stop() {
    this.stopTimer.next(true);
    this.timerSubscription.unsubscribe();
  }

  resetTimer(value){
    this.stop();
    this.timerInfo.clicksTimeStamp.push(`Reset at ${new Date()}`);
    this.timerInfo.timerValue = value;
    this.timerInfoData.next(this.timerInfo);
   
    
  }

}
