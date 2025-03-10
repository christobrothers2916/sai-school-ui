import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { CommonModule } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './admission.process.component.html',
  styleUrl: './admission.process.component.scss',
  providers: [NzModalService],
})
export class AdmissionProcessComponent {
  admissionSteps = [
    {
      id: 1,
      description:
        'A passport size colour photograph of the student with white background.',
      color: '#0097A7',
    },
    {
      id: 2,
      description: 'One photograph of both Parents/guardians.',
      color: '#F57C00',
    },
    { id: 3, description: 'Municipal Birth Certificate.', color: '#8BC34A' },
    { id: 4, description: 'Aadhar card of the student.', color: '#673AB7' },
    {
      id: 5,
      description:
        'School Leaving Certificate / Transfer Certificate from the last school attended, duly signed by the authorised person.',
      color: '#D32F2F',
    },
  ];
  constructor() {}
}
