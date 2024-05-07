import { bootstrapApplication } from '@angular/platform-browser';
import { FridgeComponent } from './app/fridge/fridge.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(FridgeComponent, config);

export default bootstrap;