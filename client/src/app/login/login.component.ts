
import { Component, computed, inject, Signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from 'store/user/user.action';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginObject: any = {
    email: '',
    password: '',
  };

  //loggedInUser: Signal<UserModel> = computed(() => this.store.select(selectUser));

  constructor(private store: Store) {}

 // loginService = inject(LoginService);

  router: Router = inject(Router);

  onLogin() {
    //debugger;
    console.log('Form submitted');
    console.log(this.loginObject);
    this.store.dispatch(AuthActions.login(this.loginObject));
    
    
    
    
    
    









    
    
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
