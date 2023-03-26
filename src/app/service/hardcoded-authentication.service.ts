import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username: string, password: string) {
    //console.log('Before : ' + this.isUserLoggedIn())
    if(username==='test' && password==='test') {
      sessionStorage.setItem('authenticatedUser',username)
      //console.log('After : '+ this.isUserLoggedIn)
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
   let user = sessionStorage.getItem('authenticatedUser');
   return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
  }
}
