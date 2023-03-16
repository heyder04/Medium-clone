import {createAction, props} from "@ngrx/store";
import {ActionTypes} from "../action-types";
import {RegisterRequestInterface} from "../../types/register-interface";
import {CurrentUserInterface} from "../../../shared/types/current-user";
import {BackendErrorInterface} from "../../../shared/types/backend-error-interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{request: RegisterRequestInterface}>()
);
export const registerSuccessAction=createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{currentUser:CurrentUserInterface}>()
)
export const registerFailureAction=createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{backendErrors:BackendErrorInterface}>()
)
