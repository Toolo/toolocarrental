import { provideRouter, RouterConfig } from '@angular/router';

import { SearchComponent } from './components/search/search.component';

const routes: RouterConfig = [
  { path: '', redirectTo: 'search', terminal: true },
  { path: 'search', component: SearchComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
