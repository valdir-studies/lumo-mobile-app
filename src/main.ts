import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideFirebaseApp } from '@angular/fire/app';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp } from 'firebase/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: import.meta.env['PROJECT_FIREBASE_API'],
  authDomain: import.meta.env['AUTHDOMAIN_FIREBASE'],
  databaseURL: import.meta.env['DATABASE_URL'],
  projectId: import.meta.env['PROJECT_ID'],
  messagingSenderId: import.meta.env['FCM_SENDER'],
  appId: import.meta.env['APP_ID'],
  storageBucket: import.meta.env['STORAGE_BUCKET']
  
}


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ],
});
