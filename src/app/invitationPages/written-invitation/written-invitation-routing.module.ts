import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WrittenInvitationPage } from './written-invitation.page';

const routes: Routes = [
  {
    path: '',
    component: WrittenInvitationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WrittenInvitationPageRoutingModule {}
