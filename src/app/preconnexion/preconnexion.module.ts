import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreconnexionPageRoutingModule } from './preconnexion-routing.module';

import { PreconnexionPage } from './preconnexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreconnexionPageRoutingModule
  ],
  declarations: [PreconnexionPage]
})
export class PreconnexionPageModule {}
