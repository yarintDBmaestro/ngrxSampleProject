import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { userReducer } from 'store/user/user.reducer';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { AuthEffects } from 'store/user/user.effects';
import { provideHttpClient } from '@angular/common/http';
import { uiReducer } from 'store/ui/ui.reducer';
import { counterReducer } from 'store/counter/counter.reducer';
import { CounterEffects } from 'store/counter/counter.effects';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideStore({ 
      user: userReducer,
      ui: uiReducer,
      counter: counterReducer
    }),
    provideEffects([AuthEffects, CounterEffects]),
    provideHttpClient()
  ]
};
