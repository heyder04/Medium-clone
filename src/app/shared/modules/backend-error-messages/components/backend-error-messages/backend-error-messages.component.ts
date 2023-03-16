import {Component, Input, OnInit} from '@angular/core';
import {BackendErrorInterface} from "../../../../types/backend-error-interface";

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.scss']
})
export class BackendErrorMessagesComponent implements OnInit{
  @Input('backendError') backenErrorProps:BackendErrorInterface
  errorMessages:string[]
  ngOnInit() {
    this.errorMessages=Object.keys(this.backenErrorProps).map((name:string) => {
      const errorMessage=this.backenErrorProps[name].join(" ")
      return `${name} ${errorMessage}`
    })
  }
}
