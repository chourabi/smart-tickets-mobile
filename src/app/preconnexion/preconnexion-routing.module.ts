import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreconnexionPage } from './preconnexion.page';

const routes: Routes = [
  {
    path: '',
    component: PreconnexionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreconnexionPageRoutingModule {}
