import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';

export const AuthActions = createActionGroup({
    source: '[Auth]',
    events: {
      login: props<{ email: string; password: string }>(), // Action without payload
      loginSuccess: props<{ user: any }>(), // Action with payload (success)
      loginFailure: props<{ error: any }>(), // Action with payload (failure)
    },
  });
  
