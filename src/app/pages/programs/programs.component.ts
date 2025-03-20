import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { CommonModule } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
  providers: [NzModalService],
})
export class ProgramsComponent {
  sections = [
    {
      name: 'Pre - School',
      subtitle: 'Early Years Programme (Pre-Nursery & Nursery):',
      list: ['Pre - Nursery', 'Nursery'],
      description:
        'At SA International , our early years programme (Pre-Nursery & Nursery) is designed to provide a nurturing, stimulating & joyful learning experience for young children. We focus on building a strong foundation for lifelong learning through play-based, inquiry-driven and hands-on experiences.',
      image: 'assets/img/pre-school-img.jpg',
      active: true,
    },
    {
      name: 'Kindergarten',
      subtitle: 'Kindergarten Programme (LKG & UKG)',
      list: ['Lower Kindergarten', 'Upper Kindergarten'],
      description:
        'Kindergarten (KG1 & KG2) syllabus emphasizes sensory exploration, play-based learning, and socialemotional development, ensuring a smooth transition into structured learning.',
      image: 'assets/img/kindergarten-img.jpg',
      active: false,
    },
    {
      name: 'Primary School',
      subtitle: 'Primary years Programme( grade 1 to grade 4)',
      list: ['Advanced Learning Modules', 'Practical Based Learning'],
      description:
        'The primary years program builds on concept- based learning, critical thinking, and problem- solving while enhancing STEM education and skill- based learning.',
      image: 'assets/img/primary-school-img.jpg',
      active: false,
    }
  ];

  // eslint-disable-next-line @typescript-eslint/no-empty-function, no-empty-function
  constructor() { }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selectSection(selectedSection: any) {
    this.sections.forEach((section) => (section.active = section === selectedSection));
  }
}
