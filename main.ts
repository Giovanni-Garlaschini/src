import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';

// Bootstrap dell'applicazione con il componente principale //
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient() // Fornisce HttpClient a tutta l'applicazione //
  ]
});
