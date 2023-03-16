import {CurrentUserInterface} from "../../shared/types/current-user";
import {BackendErrorInterface} from "../../shared/types/backend-error-interface";

export interface AuthStateInterface {
  isSubmitting:boolean,
  isLoggedIn:boolean|null,
  currentUser:CurrentUserInterface|null,
  validationErrors:BackendErrorInterface|null,
  isLoading:boolean
}
