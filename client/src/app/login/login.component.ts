
import { Component, computed, inject, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getErrorMessage } from 'store/ui/ui.selector';
import { AuthActions } from 'store/user/user.action';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObject: any = {
    email: '',
    password: '',
  };

  errorMessage$: Observable<string | null>;

  constructor(private store: Store) {
    this.errorMessage$ = this.store.select(getErrorMessage);
  }

  router: Router = inject(Router);

  onLogin() {
    //debugger;
    console.log('Form submitted');
    this.store.dispatch(AuthActions.login(this.loginObject));
    // this.store.select(getErrorMessage).subscribe((errorMessage) => {
    //   this.errorMessage$.set(errorMessage);
    // });
    
    
    
    
    
    
    









    
    
    // this.loginService.login(this.loginObject).subscribe({
    //   next: (user) => {
    //     console.log(user);
    //     console.log(this.loginObject.email);
    //     localStorage.setItem('loggedInUser', this.loginObject.email);
    //   },
    //   error: (error) => {
    //     console.error('Login failed:', error.error);
    //   },
    // });

    //this.router.navigate(['/dashboard']);
    //this.router.navigateByUrl('/dashboard');
  }
}
