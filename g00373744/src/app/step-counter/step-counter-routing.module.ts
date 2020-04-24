import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StepCounterPage } from './step-counter.page';

const routes: Routes = [
  {
    path: '',
    component: StepCounterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StepCounterPageRoutingModule {}
