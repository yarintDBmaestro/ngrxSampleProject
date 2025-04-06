import { createAction, props } from '@ngrx/store';

export const showErrorMessage = createAction(
  '[UI] Show Error Message',
  props<{ message: string }>()
);