import { Routes } from '@angular/router';
import { AdmissionComponent } from './admission.component';
import { AdmissionProcessComponent } from '../../admission.process.component/admission.process.component';

export const ADMISSION_ROUTES: Routes = [
  { path: '', component: AdmissionComponent },
  { path: 'admissionProcess', component: AdmissionProcessComponent },
];
