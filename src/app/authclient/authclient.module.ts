import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthclientPageRoutingModule } from './authclient-routing.module';

import { AuthclientPage } from './authclient.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AuthclientPageRoutingModule
  ],
  declarations: [AuthclientPage]
})
export class AuthclientPageModule {}
