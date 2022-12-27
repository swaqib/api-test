import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { RandomdogPage } from "./randomdog.page";

describe("RandomdogPage", () => {
	let component: RandomdogPage;
	let fixture: ComponentFixture<RandomdogPage>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [RandomdogPage],
			imports: [IonicModule.forRoot()],
		}).compileComponents();

		fixture = TestBed.createComponent(RandomdogPage);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
