import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthActions } from "./actions.types";
import { tap } from "rxjs/operators";
@Injectable()
export class AuthEffects {//should not be injected anywhere as it is only for ngrx

  login$ = createEffect(() => 
      this.actions$
      .pipe(
        ofType(AuthActions.login),//to filter login actions
        tap(action => {
          if(action.type == '[Login page] User Login') {
            localStorage.setItem('user',JSON.stringify(action.user));
          }
        })
      ),
      {dispatch: false}//infinite loop of login action
    );

  constructor(private actions$: Actions) {
  }
}