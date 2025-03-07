import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authenticated: boolean = false;

  router: Router;

  constructor() { 
    this.router = inject(Router);
  }

  doLogin(user: string|null|undefined, password: string|null|undefined): boolean {
    if (user == 'admin' && password == '123') {
      localStorage.setItem('token', 'token-farso');
      this.authenticated = true;
    }
    return this.authenticated;
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.authenticated = false;
    this.router.navigate(['/login']);
  }
}
