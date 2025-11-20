import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

// Bootstrap dell'applicazione con il componente principale //
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(), // Fornisce HttpClient a tutta l'applicazione //
    provideRouter(routes) // Fornisce il routing a tutta l'applicazione //
  ]
});
