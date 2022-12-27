import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomjokePageRoutingModule } from './randomjoke-routing.module';

import { RandomjokePage } from './randomjoke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomjokePageRoutingModule
  ],
  declarations: [RandomjokePage]
})
export class RandomjokePageModule {}
