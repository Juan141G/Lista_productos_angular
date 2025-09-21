import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule } from '@angular/forms';  // 👈 Importar FormsModule
import { importProvidersFrom } from '@angular/core';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter([]),
    importProvidersFrom(FormsModule) // 👈 Habilita [(ngModel)]
  ]
};

