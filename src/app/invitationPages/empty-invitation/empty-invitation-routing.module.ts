import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmptyInvitationPage } from './empty-invitation.page';

const routes: Routes = [
  {
    path: '',
    component: EmptyInvitationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmptyInvitationPageRoutingModule {}
