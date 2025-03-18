import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AntDesignModule } from '../../../../shared/ant-design.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, AntDesignModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  eventsList = [
    {
      title: 'Diwali Celebration',
      description: 'Diwali, the festival of lights, marks the time when millions...',
      image: 'assets/img/events-img1.jpg',
      link: '/events/diwali',
    },
    {
      title: 'Christmas Celebration',
      description: 'The first known date of Christmas being rejoiced on...',
      image: 'assets/img/events-img2.jpg',
      link: '/events/christmas',
    },
    {
      title: 'Dussehra Celebration',
      description: 'Lord Rama traveled to Lanka with an army of monkeys and...',
      image: 'assets/img/events-img3.jpg',
      link: '/events/dussehra',
    },
    {
      title: 'Pongal Celebration',
      description: 'It is dedicated to the sun god, Surya, and corresponds to...',
      image: 'assets/img/events-img4.webp',
      link: '/events/pongal',
    },
  ];
}
