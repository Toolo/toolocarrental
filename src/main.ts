import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { bootstrap} from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { JSONP_PROVIDERS } from '@angular/http';

import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import { AppComponent } from './app/app.component';

if (process.env.ENV === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  JSONP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: PathLocationStrategy }
])
  .catch(err => console.error(err));

