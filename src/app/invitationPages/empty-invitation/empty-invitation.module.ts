import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmptyInvitationPageRoutingModule } from './empty-invitation-routing.module';

import { EmptyInvitationPage } from './empty-invitation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmptyInvitationPageRoutingModule
  ],
  declarations: [EmptyInvitationPage]
})
export class EmptyInvitationPageModule {}
