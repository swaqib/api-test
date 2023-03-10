import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"],
})
export class HomePage {
	constructor(private router: Router) {}

	goToJoke() {
		this.router.navigateByUrl("pages/randomjoke");
	}

	goToDog() {
		this.router.navigateByUrl("pages/randomdog");
	}

	goToActivity() {
		this.router.navigateByUrl("pages/randomactivity");
	}
}
