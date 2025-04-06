import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UiState } from "./ui.reducer";

export const selectUiState = createFeatureSelector<UiState>('ui');

export const getErrorMessage = createSelector(
    selectUiState,
    (state: UiState) => state.errorMessage
);