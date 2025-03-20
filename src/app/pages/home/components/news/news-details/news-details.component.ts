/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AntDesignModule } from '../../../../../shared/ant-design.module';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './news-details.component.html',
  styleUrl: './news-details.component.scss',
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  newsList = [
    {
      id: 1,
      title: 'National Level Games',
      image: 'assets/img/news-img1.jpg',
      content: 'Detailed information about National Level Games....',
    },
    {
      id: 2,
      title: 'Awards News',
      image: 'assets/img/news-img2.jpg',
      content: 'All about the latest school awards and achievements...',
    },
    {
      id: 3,
      title: 'Improves Attention Span & Memory',
      image: 'assets/img/news-img3.jpg',
      content: 'Benefits of sports and activities on memory...',
    },
    {
      id: 4,
      title: 'Personal Development Skills',
      image: 'assets/img/news-img4.jpg',
      content: 'How students can improve their skills...',
    },
  ];
  newsItem: any;
  private subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription.add(
      this.route.params.subscribe((param: { [key: string]: string }) => {
        if (param?.['id']) {
          this.newsItem = this.newsList.find(
            (news) => news.id === Number(param['id'])
          );
        }
      })
    );
  }

  navigateToDetails(newsId: number) {
    this.router.navigate(['/news/news-details', newsId]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
