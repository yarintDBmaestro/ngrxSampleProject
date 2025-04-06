import { createAction, props } from '@ngrx/store';


export const counterActions = {
  increment: createAction('[Counter] Increment', props<{ email: string | null }>()),
  incrementSuccess: createAction('[Counter] Increment Success', props<{ email: string | null }>()),
  incrementFailure: createAction('[Counter] Increment Failure', props<{ error: any }>()),
  decrement: createAction('[Counter] Decrement', props<{ email: string | null }>()),
  decrementSuccess: createAction('[Counter] Decrement Success', props<{ email: string | null }>()),
  decrementFailure: createAction('[Counter] Decrement Failure', props<{ error: any }>()),
  reset: createAction('[Counter] Reset', props<{ email: string | null }>()),
  resetSuccess: createAction('[Counter] Reset Success', props<{ email: string | null }>()),
  resetFailure: createAction('[Counter] Reset Failure', props<{ error: any }>()),
  getCounter: createAction('[Counter] Get Counter', props<{ email: string | null}>()),
  getCounterSuccess: createAction('[Counter] Get Counter Success', props<{ counter: number }>()),
  getCounterFailure: createAction('[Counter] Get Counter Failure', props<{ error: any }>()),
};