import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

interface Activity {
	accessibility: number;
	activity: string;
	key: string;
	link: string;
	participants: number;
	price: number;
	type: string;
}

@Injectable({
	providedIn: "root",
})
export class ApicallsService {
	jokeURL: string = "https://official-joke-api.appspot.com/random_joke";
	dogURL: string = "https://dog.ceo/api/breeds/image/random";
	actURL: string = "https://www.boredapi.com/api/activity";

	constructor(private http: HttpClient) {}

	getJoke() {
		return this.http.get(this.jokeURL);
	}

	getDog() {
		return this.http.get(this.dogURL);
	}

	getAct() {
		return this.http.get<Activity>(this.actURL);
	}
}
