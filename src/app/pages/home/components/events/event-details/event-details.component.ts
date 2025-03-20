/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AntDesignModule } from '../../../../../shared/ant-design.module';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './event-details.component.html',
  styleUrl: './event-details.component.scss'
})
export class EventDetailsComponent implements OnInit {
  eventList = [
      {
        id: 1,
        title: 'Diwali Celebration',
        image: 'assets/img/events-img1.jpg',
        content: 'Diwali, the festival of lights, marks the time when millions of Hindus, Sikhs and Jains across the world celebrate the triumph of good over evil with beautiful rituals such as festive lights, fireworks, sweet delicacies and family gatherings. We delve into the Diwali story, history and traditions, to find out how Diwali is celebrated and how you can take part in the magical festivities.',
      },
      {
        id: 2,
        title: 'Christmas Celebrations',
        image: 'assets/img/events-img2.jpg',
        content: 'The first known date of Christmas being rejoiced on December 25th was in 336 AD, through the time of the Roman Emperor Constantine who was the first Christian Roman Emperor. After some years, Pope Julius I formally announced that the birth of Jesus would rejoice on the 25th of December.',
      },
      {
        id: 3,
        title: 'Dussehra Celebration',
        image: 'assets/img/events-img3.jpg',
        content: 'Lord Rama traveled to Lanka with an army of monkeys and with the support of his brother Lakshman and Lord Hanuman he killed Ravana on the tenth day of the battle. The first nine days are celebrated as Navratri and the tenth day when Ravana is killed Dussehra is celebrated.',
      },
      {
        id: 4,
        title: 'Pongal Celebration',
        image: 'assets/img/events-img4.jpg',
        content: 'It is dedicated to the sun god, Surya, and corresponds to Makar Sankranti, the harvest festival under many regional names celebrated throughout India.',
      },
    ];
  
    eventItem: any;
  
    constructor(private route: ActivatedRoute, private router: Router) {}
  
    ngOnInit() {
      const eventId = Number(this.route.snapshot.paramMap.get('id'));
      this.eventItem = this.eventList.find((event) => event.id === eventId);
    }
  
    navigateToDetails(eventId: number) {
      this.router.navigate(['/event-details', eventId]);
    } 
}
