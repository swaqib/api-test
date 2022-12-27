import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RandomactivityPage } from "./randomactivity/randomactivity.page";
import { RandomdogPage } from "./randomdog/randomdog.page";
import { RandomjokePage } from "./randomjoke/randomjoke.page";

const routes: Routes = [
	{
		path: "randomjoke",
		component: RandomjokePage,
	},
	{
		path: "randomdog",
		component: RandomdogPage,
	},
	{
		path: "randomactivity",
		component: RandomactivityPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesPageRoutingModule {}
