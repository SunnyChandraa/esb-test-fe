import { Component, Input} from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ForumModel } from 'src/app/models/forum.model';
import { map, catchError } from 'rxjs/operators';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html'
})


export class ContentComponent {
  time = new Date();
  rxTime = new Date();
  intervalId;
  subscription: Subscription;
  
  
  ngOnInit() {
    // Using Basic Interval
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        // share()
      )
      .subscribe((time: any) => {
        this.rxTime = time;
      });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @Input() forum: ForumModel;


  // move to model
  //  {
  // id: number,
  // by: string,
  // title: string,
  // score: number,
  // descendants: number,
  // time: any,
  // type: string,
  // kids: number[],
  // text: string,
  // comments: [ by: string,
  //             id: number,
  //             text: string,
  //             time: any,
  //             type: string
  //           ]
  // }
  @Input() isOnListPage: boolean;
}

