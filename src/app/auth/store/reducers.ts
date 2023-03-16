import {AuthStateInterface} from "../types/auth-state-interface";
import {Action, createReducer, on} from "@ngrx/store";
import {registerAction, registerFailureAction, registerSuccessAction} from "./actions/register";
import {state} from "@angular/animations";
import {loginAction, loginFailureAction, loginSuccessAction} from "./actions/login";
import {getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction} from "./actions/getCurrentUser";

const initialState:AuthStateInterface={
  isSubmitting:false,
  currentUser:null,
  isLoggedIn:null,
  validationErrors:null,
  isLoading:false
}

const authReducer=createReducer(
  initialState,
  on(registerAction,(state):AuthStateInterface=>({
    ...state,
  isSubmitting:true,
  validationErrors:null}),

),
  on(registerSuccessAction,(state,action):AuthStateInterface=>({
    ...state,
    isSubmitting:false,
    currentUser:action.currentUser,
    isLoggedIn:true,
    }),

  ),
  on(registerFailureAction,(state,action):AuthStateInterface=>({
    ...state,
    isSubmitting:false,
    validationErrors:action.backendErrors
    }),

  ),
  on(loginAction,(state):AuthStateInterface=>({
      ...state,
      isSubmitting:true,
      validationErrors:null
    }),

  ),
  on(loginSuccessAction,(state,action):AuthStateInterface=>({
      ...state,
      isSubmitting:false,
      currentUser:action.currentUser,
      isLoggedIn:true
    }),

  ),
  on(loginFailureAction,(state,action):AuthStateInterface=>({
      ...state,
      isSubmitting:false,
      validationErrors:action.backendErrors
    }),

  ),
  on(getCurrentUserAction,(state):AuthStateInterface=>({
      ...state,
      isLoading:true
    }),

  ),
  on(getCurrentUserSuccessAction,(state,action):AuthStateInterface=>({
      ...state,
      isLoading:false,
    isLoggedIn:true,
    currentUser:action.currentUser

    }),

  ),
  on(getCurrentUserFailureAction,(state):AuthStateInterface=>({
      ...state,
      isLoading:false,
      isLoggedIn:false,
      currentUser:null

    }),

  )
)
export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
