import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {select, Store} from "@ngrx/store";
import {registerAction} from "../../store/actions/register";
import {RegisterRequestInterface} from "../../types/register-interface";
import {Observable} from "rxjs";
import {backendErrors, isSubmittingSelector} from "../../store/selectors";
import {AuthService} from "../../services/auth-service.service";
import {BackendErrorInterface} from "../../../shared/types/backend-error-interface";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  isSubmitting$:Observable<boolean>
  validationErrors$:Observable<BackendErrorInterface | null>
  form:FormGroup
  constructor(private  fb:FormBuilder,private store:Store,private authService:AuthService) {
  }
  ngOnInit() {
   this.initializeForm()
    this.initializeValues();
  }
  initializeForm(){
    this.form=this.fb.group(
      {
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
      }
    )
  }
  initializeValues(){
    this.isSubmitting$=this.store.pipe(select(isSubmittingSelector));
    this.validationErrors$=this.store.pipe(select(backendErrors));
  }
  onSubmit(){
    const request: RegisterRequestInterface = {
      user: this.form.value
    }
  this.store.dispatch(registerAction({request}))
  }

}
