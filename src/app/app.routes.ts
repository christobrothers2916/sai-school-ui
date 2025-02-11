import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'admission',
    loadChildren: () =>
      import('./pages/home/admission/admission.routes').then(
        (m) => m.admissionRoutes
      ),
  },
];
