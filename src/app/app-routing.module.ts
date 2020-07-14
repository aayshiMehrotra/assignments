import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'assignmentOne',
    loadChildren: () => import('./assignment-one/assignment-one.module').then(m => m.AssignmentOneModule)

  } ,
  {
    path: 'assignmentTwo',
    loadChildren: () => import('./assignment-two/assignment-two.module').then(m => m.AssignmentTwoModule)

  },
  {
    path: 'assignmentThree',
    loadChildren: () => import('./assignment-three/assignment-three.module').then(m => m.AssignmentThreeModule)

  },
  {
    path: 'assignmentFour',
    loadChildren:  () => import('./assignment-four/assignment-four.module').then(m => m.AssignmentFourModule)

  },
  {
    path: 'assignmentFive',
    loadChildren:  () => import('./assignment-five/assignment-five.module').then(m => m.AssignmentFiveModule)

  },
  {
    path: 'assignmentSix',
    loadChildren: () => import('./assignment-six/assignment-six.module').then(m => m.AssignmentSixModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
