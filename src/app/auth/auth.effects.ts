import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";

@Injectable()
export class AuthEffects {//should not be injected anywhere as it is only for ngrx
  constructor(private actions$: Actions) {
    actions$.subscribe(action => {
      if(action.type == '[Login page] User Login') {
        localStorage.setItem('user',JSON.stringify(action["user"]));
      }
    })
  }
}