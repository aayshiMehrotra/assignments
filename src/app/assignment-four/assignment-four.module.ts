import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignmentFourComponent } from './components/assignment-four/assignment-four.component';
import { TimerNewComponent } from './components/timer-new/timer-new.component';
import { TimerSetupNewComponent } from './components/timer-setup-new/timer-setup-new.component';
import { TimerLogNewComponent } from './components/timer-log-new/timer-log-new.component';
import { TimerAnalysisNewComponent } from './components/timer-analysis-new/timer-analysis-new.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: AssignmentFourComponent
  }
];


@NgModule({
  declarations: [
    TimerNewComponent,
    TimerSetupNewComponent,
    TimerLogNewComponent,
    TimerAnalysisNewComponent,
    AssignmentFourComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule,AssignmentFourComponent]
})
export class AssignmentFourModule { }
