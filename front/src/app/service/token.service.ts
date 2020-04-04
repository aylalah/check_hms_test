import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  private iss = {

    
    // login: 'https://buthserver.checkhms.com/back/backend/public/api/login',
    // signup: 'https://buthserver.checkhms.com/back/backend/public/api/signup'
    
    // login: 'https://hms.jtcheck.com/back/backend/public/api/login',
    // signup: 'https://hms.jtcheck.com/back/backend/public/api/signup'

    login: 'http://localhost/check_hms_test/backend/public/api/login',
    signup: 'http://localhost/check_hms_test/backend/public/api/signup'

    
  };

  constructor() { }

  handle(token) {
    this.set(token);
    // console.log(this.isValid());
  }

  set(token) {
    localStorage.setItem('token', token);
  }
  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('loaded');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
