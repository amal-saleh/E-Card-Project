import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WrittenInvitationPageRoutingModule } from './written-invitation-routing.module';

import { WrittenInvitationPage } from './written-invitation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WrittenInvitationPageRoutingModule
  ],
  declarations: [WrittenInvitationPage]
})
export class WrittenInvitationPageModule {}
