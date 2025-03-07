import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { IonInput } from '@ionic/angular/standalone';
import { Keyboard, KeyboardResize } from '@capacitor/keyboard';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor() {
    Keyboard.addListener('keyboardDidShow', info => {
      document.body.style.marginTop = `-${info.keyboardHeight / 2}px`
    })
    Keyboard.addListener('keyboardDidHide', () => {
      document.body.style.marginTop = "0"
    })
    
    Keyboard.setAccessoryBarVisible({isVisible: true})

  }
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
      this.router.navigate(['/tabs/explore']);
    } else {
      console.error("Usuário ou senha incorretos!")
    }
  }
}
