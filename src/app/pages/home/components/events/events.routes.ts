import { Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { EventDetailsComponent } from './event-details/event-details.component';

export const EVENTS_ROUTES: Routes = [
  { path: '', component: EventsComponent },
  { path: 'event-details/:id', component: EventDetailsComponent },
];
