import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.reducer';

export const selectCounterState = createFeatureSelector<CounterState>('counter');

export const getCount = createSelector(
    selectCounterState,
    (state: CounterState) => state.count
); 
