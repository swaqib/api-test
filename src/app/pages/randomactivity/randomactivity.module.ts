import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomactivityPageRoutingModule } from './randomactivity-routing.module';

import { RandomactivityPage } from './randomactivity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomactivityPageRoutingModule
  ],
  declarations: [RandomactivityPage]
})
export class RandomactivityPageModule {}
