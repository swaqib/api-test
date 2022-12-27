import { Component, OnInit } from '@angular/core';
import { ApicallsService } from 'src/app/services/apicalls.service';

@Component({
  selector: 'app-randomjoke',
  templateUrl: './randomjoke.page.html',
  styleUrls: ['./randomjoke.page.scss'],
})
export class RandomjokePage implements OnInit {

  joke:any;

  constructor(
    private api: ApicallsService
  ) { }

  ngOnInit() {

    this.api.getJoke().subscribe({
      next: (data: any) => {
        this.joke = data;
        console.log("joke: ",this.joke);
        console.log("joke: ",this.joke.setup);
      },
      error: (err: any) => console.log(err),
      complete: () => console.info('complete')
    });

  }



}
