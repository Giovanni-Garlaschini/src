import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { GeneratorComponent } from './pages/generator/generator.component';

// Definizione delle rotte dell'applicazione //
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'generator',
    component: GeneratorComponent
  }
];