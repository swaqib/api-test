import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomjokePage } from './randomjoke.page';

const routes: Routes = [
  {
    path: '',
    component: RandomjokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomjokePageRoutingModule {}
