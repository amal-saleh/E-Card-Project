import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrittenCongratulatePage } from './written-congratulate.page';

const routes: Routes = [
  {
    path: '',
    component: WrittenCongratulatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrittenCongratulatePageRoutingModule {}
