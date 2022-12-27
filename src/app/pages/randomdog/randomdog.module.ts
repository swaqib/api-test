import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomdogPageRoutingModule } from './randomdog-routing.module';

import { RandomdogPage } from './randomdog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomdogPageRoutingModule
  ],
  declarations: [RandomdogPage]
})
export class RandomdogPageModule {}
