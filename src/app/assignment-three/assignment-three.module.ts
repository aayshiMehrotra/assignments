import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AssignmentThreeComponent } from './components/assignment-three/assignment-three.component';
import { TimerComponent } from './components/timer/timer.component';
import { TimerSetupComponent } from './components/timer-setup/timer-setup.component';
import { TimerLogComponent } from './components/timer-log/timer-log.component';
import { TimerAnalysisComponent } from './components/timer-analysis/timer-analysis.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: AssignmentThreeComponent
  }
];

@NgModule({
  declarations: [
    TimerComponent,
    TimerSetupComponent,
    TimerLogComponent,
    TimerAnalysisComponent,
    AssignmentThreeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule,AssignmentThreeComponent]
})


export class AssignmentThreeModule { }
