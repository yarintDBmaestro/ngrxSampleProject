import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { userReducer } from 'store/user/user.reducer';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from 'store/user/user.effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({ user: userReducer}),
    provideEffects([AuthEffects]),
    provideHttpClient()
  ]
};
