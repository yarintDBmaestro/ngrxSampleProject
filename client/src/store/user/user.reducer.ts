import { createReducer } from "@ngrx/store";

import { on } from "@ngrx/store";
import { AuthActions } from "./user.action";
import { userState } from "./user.state";



export const userReducer = createReducer(
    userState,
    // on(AuthActions.login, (state, action) => {
    //     return { ...state };
    // }),
    on(AuthActions.loginSuccess, (state, action) => {
        console.log('Login success action dispatched', action);
        return { ...state, email: action.user.email,  };
    }),
    on(AuthActions.loginFailure, (state, action) => {
        console.log('Login failure action dispatched', action);
        return { ...state, email: null};
    })
);


