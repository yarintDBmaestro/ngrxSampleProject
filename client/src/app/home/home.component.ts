import { Component, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { getUser } from 'store/user/user.selector';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  userEmail: WritableSignal<string | null> = signal(null);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select(getUser).subscribe(user => {
      console.log('User from store:', user);
      if (user) {
        this.userEmail.set(user.email);
      }
      });
  }
}
