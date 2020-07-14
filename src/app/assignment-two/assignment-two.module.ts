import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentTwoComponent } from './assignment-two.component';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: AssignmentTwoComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forChild(routes),
      SharedModule,

    ],
    declarations:[
      AssignmentTwoComponent,
    ],
  exports: [AssignmentTwoComponent,RouterModule]
})
export class AssignmentTwoModule { }