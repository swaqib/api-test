import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PagesPageRoutingModule } from "./pages-routing.module";

import { RandomactivityPage } from "./randomactivity/randomactivity.page";
import { RandomdogPage } from "./randomdog/randomdog.page";
import { RandomjokePage } from "./randomjoke/randomjoke.page";

@NgModule({
	imports: [CommonModule, FormsModule, IonicModule, PagesPageRoutingModule],
	declarations: [RandomactivityPage, RandomdogPage, RandomjokePage],
})
export class PagesPageModule {}
