import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  userForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  })
  
  authService = inject(AuthService);
  router = inject(Router);

  login() {
    if (this.authService.doLogin(this.userForm.value.userName, this.userForm.value.password)) {
      this.userForm.value.userName = "";
      this.userForm.value.password = "";
      this.router.navigate(['/tabs/dashboard']);
    } else {
      console.error("Usuário ou senha incorretos!")
    }
  }
}
