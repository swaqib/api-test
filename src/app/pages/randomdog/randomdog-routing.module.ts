import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomdogPage } from './randomdog.page';

const routes: Routes = [
  {
    path: '',
    component: RandomdogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomdogPageRoutingModule {}
