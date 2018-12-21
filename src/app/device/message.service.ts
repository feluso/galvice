import { Observable, from, timer, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { zip } from 'rxjs/operators';

@Injectable()
export class MessageService {

  actualMessage: String = '';
  asyncMessages: Observable<String>;
  asyncSubscription: Subscription;

  public subscribeToMessages(messages: String[]) {
    if (this.asyncSubscription) {
      this.asyncSubscription.unsubscribe();
    }
    this.asyncMessages = from(messages).pipe(zip(timer(0, 3000), (d) => d));
    this.asyncSubscription = this.asyncMessages.subscribe(message => {
      this.actualMessage = message;
    });
  }
}
