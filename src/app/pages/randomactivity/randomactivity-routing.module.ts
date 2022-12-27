import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RandomactivityPage } from './randomactivity.page';

const routes: Routes = [
  {
    path: '',
    component: RandomactivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RandomactivityPageRoutingModule {}
