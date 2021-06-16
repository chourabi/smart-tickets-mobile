import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthclientPage } from './authclient.page';

const routes: Routes = [
  {
    path: '',
    component: AuthclientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthclientPageRoutingModule {}
