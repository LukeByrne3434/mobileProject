import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcPagePage } from './calc-page.page';

const routes: Routes = [
  {
    path: '',
    component: CalcPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcPagePageRoutingModule {}
