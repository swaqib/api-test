import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RandomjokePage } from "./randomjoke.page";

describe("RandomjokePage", () => {
	let component: RandomjokePage;
	let fixture: ComponentFixture<RandomjokePage>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [RandomjokePage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(RandomjokePage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
