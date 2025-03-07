import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import {IonContent} from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  imports: [IonContent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  
})
export class DashboardComponent {
  authService = inject(AuthService);

  logout() {
    this.authService.logout();
  }
}
