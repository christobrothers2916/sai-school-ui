import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { CommonModule } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  providers: [NzModalService],
})
export class GalleryComponent {
  galleryItems = [
    {
      title: 'Christmas Day Celebration',
      image: 'assets/img/gallery-img1.jpg',
    },
    {
      title: 'Purple Colour Day',
      image: 'assets/img/gallery-img2.png',
    },
    {
      title: 'Annual Day Celebrations',
      image: 'assets/img/gallery-img3.jpg',
    },
    { title: 'Bridge Course', image: 'assets/img/gallery-img4.png' },
  ];
  constructor() {}
}
