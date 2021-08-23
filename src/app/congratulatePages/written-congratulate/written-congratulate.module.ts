import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WrittenCongratulatePageRoutingModule } from './written-congratulate-routing.module';

import { WrittenCongratulatePage } from './written-congratulate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WrittenCongratulatePageRoutingModule
  ],
  declarations: [WrittenCongratulatePage]
})
export class WrittenCongratulatePageModule {}
