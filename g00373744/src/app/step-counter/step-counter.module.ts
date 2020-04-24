import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StepCounterPageRoutingModule } from './step-counter-routing.module';

import { StepCounterPage } from './step-counter.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StepCounterPageRoutingModule
  ],
  declarations: [StepCounterPage]
})
export class StepCounterPageModule {}
