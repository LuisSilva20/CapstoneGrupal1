import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideIonicAngular } from '@ionic/angular/standalone';

import { AppComponent } from './app/app.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio-sesion',
    pathMatch: 'full'
  },
  {
    path: 'inicio-sesion',
    loadComponent: () => import('./app/pages/inicio-sesion/inicio-sesion.page').then(m => m.InicioSesionPage)
  },
  {
    path: 'registrarse',
    loadComponent: () => import('./app/pages/registrarse/registrarse.page').then(m => m.RegistrarsePage)
  },
  {
    path: 'home',
    loadComponent: () => import('./app/pages/home/home.page').then(m => m.HomePage)
  }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideIonicAngular(),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations()
  ]
}).catch(err => console.error(err));