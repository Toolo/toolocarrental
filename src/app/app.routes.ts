import { provideRouter, RouterConfig } from '@angular/router';

import { SearchComponent } from './components/search/search.component';

const routes: RouterConfig = [
  { path: '', component: SearchComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
