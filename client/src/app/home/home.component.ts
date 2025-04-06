import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { getUser } from 'store/user/user.selector';
import { Observable } from 'rxjs';
import { getCount } from 'store/counter/counter.selector';
import { counterActions } from 'store/counter/counter.actions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userEmail: WritableSignal<string | null> = signal(null);
  count$: Observable<number>;


  constructor(private store: Store) {
    this.count$ = this.store.select(getCount);
  }

  ngOnInit() {
    this.store.select(getUser).subscribe(user => {
      console.log('User from store:', user);
      if (user) {
        this.userEmail.set(user.email);
      }
      });
      this.store.dispatch(counterActions.getCounter({ email: this.userEmail()? this.userEmail() : '' }));
  }

  increment() {
    this.store.dispatch(counterActions.increment({ email: this.userEmail()? this.userEmail() : '' }));
  }

  decrement() {
    this.store.dispatch(counterActions.decrement({ email: this.userEmail()? this.userEmail() : '' }));
  }

  reset() {
    this.store.dispatch(counterActions.reset({ email: this.userEmail()? this.userEmail() : '' }));
  }
}
