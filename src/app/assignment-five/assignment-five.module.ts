import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentFiveComponent } from './assignment-five.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { SharedModule } from '../shared.module';

const routes: Routes = [
  {
    path: '',
    component: AssignmentFiveComponent
  }
];

@NgModule({
  declarations: [
    AssignmentFiveComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [RouterModule,AssignmentFiveComponent]
})
export class AssignmentFiveModule { }