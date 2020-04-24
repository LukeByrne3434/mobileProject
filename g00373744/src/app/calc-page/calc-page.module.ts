import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import{IonicStorageModule} from '@ionic/storage'

import { IonicModule } from '@ionic/angular';

import { CalcPagePageRoutingModule } from './calc-page-routing.module';

import { CalcPagePage } from './calc-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    
    CalcPagePageRoutingModule
  ],
  declarations: [CalcPagePage]
  

})
export class CalcPagePageModule {

  
}
