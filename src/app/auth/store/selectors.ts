import {AuthStateInterface} from "../types/auth-state-interface";
import {AppStateInterface} from "../../shared/types/app-state-interface";
import {createFeatureSelector, createSelector} from "@ngrx/store";

export const authFeatureSelector = (
  state:AppStateInterface
):AuthStateInterface=>state.auth

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isSubmitting
)
export const backendErrors = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.validationErrors
)
export const currentUser = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.currentUser
)

export const isLoggedIn = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn
)
export const isAnonymous = createSelector(
  authFeatureSelector,
  (authState: AuthStateInterface) => authState.isLoggedIn===false
)
