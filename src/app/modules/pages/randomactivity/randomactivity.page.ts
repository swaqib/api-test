import { Component, OnInit } from "@angular/core";
import { ApicallsService } from "src/app/services/apicalls.service";

@Component({
	selector: "app-randomactivity",
	templateUrl: "./randomactivity.page.html",
	styleUrls: ["./randomactivity.page.scss"],
})
export class RandomactivityPage implements OnInit {
	activity: any;

	constructor(private api: ApicallsService) {}

	ngOnInit() {
		this.api.getAct().subscribe({
			next: data => {
				this.activity = data;
				console.log("data: ", data);
				console.log("activity: ", this.activity);
			},
			error: err => console.log(err),
			complete: () => console.log("completed"),
		});
	}
}
