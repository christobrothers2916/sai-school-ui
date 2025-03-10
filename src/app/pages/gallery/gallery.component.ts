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
      image: '../../../assets/img/gallery-img1.JPG',
    },
    {
      title: 'Purple Colour Day',
      image: '../../../assets/img/gallery-img1.JPG',
    },
    {
      title: 'Annual Day Celebrations',
      image: '../../../assets/img/gallery-img1.JPG',
    },
    { title: 'Bridge Course', image: '../../../assets/img/gallery-img1.JPG' },
  ];
  constructor() {}
}
