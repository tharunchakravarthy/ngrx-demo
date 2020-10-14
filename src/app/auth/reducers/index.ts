import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../actions.types'
export interface AuthState {

}

export const initialAuthState = {
  user: undefined
}

export const reducers: ActionReducerMap<AuthState> = {

};

export const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action ) => {
    return {
      user: action.user
    }
  })
)