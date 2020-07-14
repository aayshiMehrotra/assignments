import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadMoreDirective } from '../directives/load-more.directive';
import { AssignmentSixComponent } from './assignment-six.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {
    path: '',
    component: AssignmentSixComponent
  }
];

@NgModule({
  declarations: [
    AssignmentSixComponent,
    LoadMoreDirective
  ],
  imports: [
      RouterModule.forChild(routes),
      CommonModule,
    ],
  exports: [RouterModule,AssignmentSixComponent]
})
export class AssignmentSixModule { } 