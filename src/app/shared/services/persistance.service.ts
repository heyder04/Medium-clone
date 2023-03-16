import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistanceService {
  set(key:string,data:any){
    try {
      localStorage.setItem(key,JSON.stringify(data))
    }catch (e){

    }
  }
  get(key:string){
    try {
      return JSON.parse(localStorage.getItem(key))
    }
    catch (e){
      console.error('Error to get data from local storage',e)
      return null
    }
  }
  constructor() { }
}
