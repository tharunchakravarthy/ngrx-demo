import { routerReducer } from '@ngrx/router-store';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';

export interface AppState {//corresponds to the global state in store

}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer
};
//metareducers - like any reducer but invoked before other reducers
//arguments - reducers which need to be invoked after this meta reducer
//retrun output of our reducers
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state,action) => {
    console.log("state before:",state);
    console.log("action",action);
    return reducer(state,action);
  }
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
