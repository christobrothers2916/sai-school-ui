import { Routes } from '@angular/router';
import { NewsComponent } from './news.component';
import { NewsDetailsComponent } from './news-details/news-details.component';

export const NEWS_ROUTES: Routes = [
  { path: '', component: NewsComponent },
  { path: 'news-details/:id', component: NewsDetailsComponent },
];
