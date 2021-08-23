import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyCongratulatePage } from './empty-congratulate.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyCongratulatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyCongratulatePageRoutingModule {}
