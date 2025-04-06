import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserModel } from "models/login.model";

export const selectUserState = createFeatureSelector<UserModel>('user');

export const getUser = createSelector(
    selectUserState,
    (state: UserModel) => state
);