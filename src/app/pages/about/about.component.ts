import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { CommonModule } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzAnchorModule } from 'ng-zorro-antd/anchor';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AntDesignModule, NzAnchorModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  providers: [NzModalService],
})
export class AboutComponent {
  public imageBanner: string[] = [];

  aboutSections = [
    {
      id: 'about',
      name: 'About SAIS',
      content:
        'SA International School campus has been nestled in a pollution-free, eco-friendly environment where children experience the joy of learning through an activity-based curriculum. SA International School offers a well-rounded curriculum designed to foster academic excellence, creativity, critical thinking, problem-solving, and character development. Our school’s architecture meets international standards in every aspect, including classrooms, various labs, parks, washrooms, and more. Join us on this journey of learning, discovery, and growth.',
    },
    {
      id: 'vision',
      name: 'Our Vision',
      content:
        'To create a nurturing environment where every child is empowered to discover and embrace their unique potential, fostering creativity, individuality, and a passion for lifelong learning.',
    },
    {
      id: 'mission',
      name: 'Our Mission',
      content:
        'Our mission is to provide a dynamic learning experience that encourages students to explore their distinct abilities and talents. Through personalized attention and innovative teaching methods, each child can discover their strengths and pursue their passions with confidence.',
    },
    {
      id: 'history',
      name: 'History of SAIS',
      content:
        'SA International began its journey in 2018 as "Kids Valley," a small yet ambitious learning space with a few students. Over the years, the school grew steadily, attracting more students and gaining a reputation for quality education and child-centered learning. By 2023, SA International was officially established.',
    },
    {
      id: 'growth',
      name: 'Milestones in Our Growth',
      milestones: [
        {
          year: '2018',
          description:
            'Founded as KIDS VALLEY, focusing on early childhood education.',
        },
        {
          year: '2019',
          description: 'Expanded to include LKG classes for early learning.',
        },
        {
          year: '2020',
          description:
            'Upgraded to Grade 2, introducing experiential learning.',
        },
        {
          year: '2023',
          description: 'SA International was established, marking a new era.',
        },
        {
          year: '2025 and beyond',
          description:
            'Setting new benchmarks in education with global perspectives and leadership skills.',
        },
      ],
    },
    {
      id: 'principal-message',
      name: "Principal's Message",
      content: [
        { text: 'Dear Parents, Students, and Community Members,' },
        { text: 'It is my great pleasure to welcome you to SA International, a school built on the foundation of nurturing the uniqueness of every child. Since our humble beginnings in 2018 as Kids Valley, we have grown into a thriving learning community known as SA International.' },
        { text: 'At SA International, we believe that education goes beyond textbooks—it is about curiosity, exploration, and lifelong learning. Our vision is to create an environment where every child is valued, every teacher is inspired, and every learning experience is meaningful.' },
        { text: 'We strongly believe that education is a partnership between students, teachers, and parents. We encourage open communication and collaboration to ensure the success of every child.' },
        { text: 'As we move forward, we remain committed to our mission of empowering young minds, fostering innovation, and preparing our students for a bright future.' },
        { text: 'Warm Regards,', bold: true },
        { text: 'Shiji', bold: true },
        { text: 'Principal, SA International', bold: true }
      ]
    }
  ];

  constructor() {
    this.imageBanner = ['assets/img/aboutus-banner.png'];
  }
}
