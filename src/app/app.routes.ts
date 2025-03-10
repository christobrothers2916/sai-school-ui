import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.routes').then((m) => m.HOME_ROUTES),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./pages/about/about.routes').then((m) => m.ABOUT_ROUTES),
  },
  {
    path: 'admission',
    loadChildren: () =>
      import('./pages/home/admission/admission.routes').then(
        (m) => m.ADMISSION_ROUTES
      ),
  },
  {
    path: 'academia',
    loadChildren: () =>
      import('./pages/home/components/academia/academia.routes').then(
        (m) => m.ACADEMIA_ROUTES
      ),
  },
  {
    path: 'programs',
    loadChildren: () =>
      import('./pages/programs/programs.routes').then((m) => m.PROGRAMS_ROUTES),
  },
  {
    path: 'gallery',
    loadChildren: () =>
      import('./pages/gallery/gallery.routes').then((m) => m.GALLERY_ROUTES),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./pages/contact/contact.routes').then((m) => m.CONTACT_ROUTES),
  },
];
