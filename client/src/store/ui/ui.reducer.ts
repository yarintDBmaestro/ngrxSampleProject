import { createReducer, on } from '@ngrx/store';
import { showErrorMessage } from './ui.actions';    

export interface UiState {
  errorMessage: string | null;
}

const initialState: UiState = {
  errorMessage: null,
};

export const uiReducer = createReducer(
  initialState,
  on(showErrorMessage, (state, { message }) => {
    console.log('showErrorMessage action dispatched', message);
    return {
      ...state,
      errorMessage: message
    };
  })
);
