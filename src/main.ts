// Import global stylesheet
import './styles/main.css';

//platformBrowserDynamic helps us with debugging errors
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//When you want to deploy change above to:
// import { platformBrowser } from '@angular/platform-browser';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
