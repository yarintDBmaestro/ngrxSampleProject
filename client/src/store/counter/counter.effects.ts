import { inject, Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { counterActions } from "./counter.actions";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { CounterService } from "../../services/counter.service";

@Injectable()   
export class CounterEffects {

  private counterService: CounterService = inject(CounterService);

  private actions$: Actions = inject(Actions);

  constructor() {
  }

  increment$ = createEffect(() => this.actions$.pipe(
    ofType(counterActions.increment),
    mergeMap((action) => this.counterService.increment(action.email).pipe(  
      map((response) => counterActions.incrementSuccess({ email: action.email })),
      catchError((error) => of(counterActions.incrementFailure({ error })))
    ))
  ));

  decrement$ = createEffect(() => this.actions$.pipe(
    ofType(counterActions.decrement),
    mergeMap((action) => this.counterService.decrement(action.email).pipe(
      map((response) => counterActions.decrementSuccess({ email: action.email })),
      catchError((error) => of(counterActions.decrementFailure({ error })))
    ))
  ));

  reset$ = createEffect(() => this.actions$.pipe(
    ofType(counterActions.reset),
    mergeMap((action) => this.counterService.reset(action.email).pipe(
      map((response) => counterActions.resetSuccess({ email: action.email })),
      catchError((error) => of(counterActions.resetFailure({ error })))
    ))
  ));

  getCounter$ = createEffect(() => this.actions$.pipe(
    ofType(counterActions.getCounter),
    mergeMap((action) => this.counterService.getCounter(action.email).pipe(
      map((response: any) => counterActions.getCounterSuccess({ counter: response.counter })),
      catchError((error) => of(counterActions.getCounterFailure({ error })))
    ))
  ));
}