import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, AntDesignModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  newsList = [
    {
      title: 'National Level Games',
      description: 'Each new generation of video games promises more...',
      image: 'assets/img/news-img1.jpg',
      link: '/news/national-games'
    },
    {
      title: 'Awards News',
      description: 'Though you may feel confident putting your word...',
      image: 'assets/img/news-img2.jpg',
      link: '/news/awards-news'
    },
    {
      title: 'Improves Attention',
      description: 'The need and importance of yoga in education also...',
      image: 'assets/img/news-img3.jpg',
      link: '/news/yoga-benefits'
    },
    {
      title: 'Personal Development',
      description: 'Personal development is essential to realizing your...',
      image: 'assets/img/news-img4.jpg',
      link: '/news/personal-growth'
    }
  ];

}
