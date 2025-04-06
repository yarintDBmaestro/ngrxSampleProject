import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../../services/login.service';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthActions } from './user.action';  // Actions
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';


@Injectable()
export class AuthEffects {

  private actions$: Actions = inject(Actions);
  private loginService: LoginService = inject(LoginService);
  private router: Router = inject(Router);
  private store: Store = inject(Store);
  constructor() {
  }

  // Effect to handle login action
  login$ = createEffect(() => 
     this.actions$.pipe(
      ofType(AuthActions.login),  // Listen for the login action
      mergeMap((action) =>
        this.loginService.login(action.email, action.password).pipe(  // Call the login service
          map((user) => AuthActions.loginSuccess({ user })),  // On success, dispatch loginSuccess with the user
          catchError((error) => of(AuthActions.loginFailure({ error })))  // On failure, dispatch loginFailure with the error
        )
    )
  )
  );

  loginSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      tap(() => this.router.navigate(['/home']))
    ), { dispatch: false }
  )
}
