import { bootstrapApplication } from '@angular/platform-browser';
import { FridgeComponent } from './app/fridge/fridge.component';
import { appConfig } from './app/app.config';

bootstrapApplication(FridgeComponent, appConfig)
  .catch((err) => console.error(err));