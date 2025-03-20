/* eslint-disable @typescript-eslint/no-unused-vars */
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AntDesignModule } from '../../../../shared/ant-design.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, AntDesignModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  isEvent = true;
  eventsList = [
    { 
      id: 1,
      title: 'Diwali Celebration',
      description: 'Diwali, the festival of lights, marks the time when millions...',
      image: 'assets/img/events-img1.jpg',
    },
    { 
      id: 2,
      title: 'Christmas Celebration',
      description: 'The first known date of Christmas being rejoiced on...',
      image: 'assets/img/events-img2.jpg',
    },
    {
      id: 3,
      title: 'Dussehra Celebration',
      description: 'Lord Rama traveled to Lanka with an army of monkeys and...',
      image: 'assets/img/events-img3.jpg',
    },
    { 
      id: 4,
      title: 'Pongal Celebration',
      description: 'It is dedicated to the sun god, Surya, and corresponds to...',
      image: 'assets/img/events-img4.webp',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const urlSegments = this.router.url.split('/'); 
    const lastSegment = urlSegments[urlSegments.length - 1];
    if(lastSegment === 'home') {
      this.isEvent = false;
    }
  }

  navigateToEvent(id: number) {
    this.router.navigate(['/events/event-details', id]);
  }
}
