import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { ExploreComponent } from './pages/explore/explore.component';
import { TabsComponent } from './components/tabs/tabs.component';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {
        path: '',
        canActivate: [authGuard],
        loadChildren: () => import('./components/tabs/tabs.routes').then(m => m.routes)
    },
    
    {path: '**', redirectTo: '/login'}
];
