import { Component, OnInit } from '@angular/core';
import { ApicallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-randomdog',
  templateUrl: './randomdog.page.html',
  styleUrls: ['./randomdog.page.scss'],
})
export class RandomdogPage implements OnInit {

  dog:any;

  constructor(
    private api: ApicallsService
  ) { }

  ngOnInit() {
    this.api.getDog().subscribe({
      next: (data) => {
        this.dog = data;
        console.log("data: ",data);
        console.log("dog: ",this.dog);
      },
      error: (err) => console.log(err),
      complete: () => console.log("completed")
    })
  }

}
