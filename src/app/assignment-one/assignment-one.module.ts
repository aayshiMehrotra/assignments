import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AssignmentOneComponent } from './assignment-one.component';
import { CommonModule } from '@angular/common';
import { DivLoopDirective } from '../directives/div-loop.directive';


const routes: Routes = [
  {
    path: '',
    component: AssignmentOneComponent
  }
];

@NgModule({
  declarations: [
    AssignmentOneComponent,
    DivLoopDirective,
    
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule],
  exports: [AssignmentOneComponent,RouterModule]
})
export class AssignmentOneModule { }