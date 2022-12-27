import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RandomactivityPage } from "./randomactivity.page";

describe("RandomactivityPage", () => {
	let component: RandomactivityPage;
	let fixture: ComponentFixture<RandomactivityPage>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [RandomactivityPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(RandomactivityPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
