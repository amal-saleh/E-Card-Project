import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyCongratulatePageRoutingModule } from './empty-congratulate-routing.module';

import { EmptyCongratulatePage } from './empty-congratulate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyCongratulatePageRoutingModule
  ],
  declarations: [EmptyCongratulatePage]
})
export class EmptyCongratulatePageModule {}
