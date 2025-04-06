import { createReducer, on } from '@ngrx/store';
import { counterActions } from './counter.actions';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = {
  count: 0,
};

export const counterReducer = createReducer(initialState,
    on(counterActions.increment, (state, action) => { 
      console.log('increment', action);
      return { ...state, count: state.count + 1 } }),
    on(counterActions.decrement, (state, action)  => {
      console.log('decrement', action);
      return { ...state, count: state.count - 1 } }),
    on(counterActions.reset, (state, action) => {
      console.log('reset', action);
      return { ...state, count: 0 } }),    
    on(counterActions.getCounterSuccess, (state, action) => {
      console.log('getCounterSuccess', action);
      return { ...state, count: action.counter }}),
);

export function reducer(state: CounterState, action: any) {
    return counterReducer(state, action);
}