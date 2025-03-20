import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, AntDesignModule, RouterModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  isNews = true;
  newsList = [
    { 
      id: 1,
      title: 'National Level Games',
      description: 'Each new generation of video games promises more...',
      image: 'assets/img/news-img1.jpg',
      link: '/news/national-games'
    },
    { 
      id: 2,
      title: 'Awards News',
      description: 'Though you may feel confident putting your word...',
      image: 'assets/img/news-img2.jpg',
      link: '/news/awards-news'
    },
    { 
      id: 3,
      title: 'Improves Attention',
      description: 'The need and importance of yoga in education also...',
      image: 'assets/img/news-img3.jpg',
      link: '/news/yoga-benefits'
    },
    { 
      id: 4,
      title: 'Personal Development',
      description: 'Personal development is essential to realizing your...',
      image: 'assets/img/news-img4.jpg',
      link: '/news/personal-growth'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
    const urlSegments = this.router.url.split('/'); 
    const lastSegment = urlSegments[urlSegments.length - 1];
    if(lastSegment === 'home') {
      this.isNews = false;
    }
  }

  navigateToNews(id: number) {
    this.router.navigate(['/news/news-details', id]);
  }
}
