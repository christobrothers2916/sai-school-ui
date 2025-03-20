import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { CommonModule } from '@angular/common';
import { AcademiaComponent } from './components/academia/academia.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { EventsComponent } from './components/events/events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AntDesignModule,
    ImageBannerComponent,
    AcademiaComponent,
    NewsComponent,
    EventsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [NzModalService],
})
export class HomeComponent {
  galleryImages = [
    { src: 'assets/img/gallery-img1.jpeg', alt: '' },
    { src: 'assets/img/gallery-img2.png', alt: '' },
    { src: 'assets/img/gallery-img3.jpg', alt: '' },
    { src: 'assets/img/gallery-img4.png', alt: '' },
    { src: 'assets/img/gallery-img5.jpg', alt: '' },
  ];
  constructor(
    private modal: NzModalService,
    private router: Router
  ) {
    setTimeout(() => {
      this.openVideoModal();
    }, 1000);
  }

  openVideoModal(): void {
    this.modal.create({
      nzTitle: 'Admission',
      nzContent: `
        <video width="100%" controls autoplay muted loop>
          <source src="assets/video/admission.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `,
      nzFooter: [
        {
          label: 'Admission Enquiry',
          type: 'primary',
          onClick: () => this.router.navigate(['/admission']),
        },
      ],
      nzWidth: 500,
      nzClassName: 'video-modal',
      nzMaskClosable: false,
    });
  }

  navigateTo(route: string) {
    if (route) {
      this.router.navigate([route]);
    }
  }
}
