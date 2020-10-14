import { createAction, props } from '@ngrx/store';
import { User } from './model/user.model'

export const login = createAction(//login is a function which creates action and takes user as arg(optional)
  "[Login page] User Login",
  props<{user: User}>()
)