import { Component } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-banner',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './image-banner.component.html',
  styleUrl: './image-banner.component.scss',
})
export class ImageBannerComponent {
  public imageBanner: string[] = [];

  constructor() {
    this.imageBanner = [
      'assets/img/banner1.png',
      'assets/img/banner2.png',
      'assets/img/banner3.png',
      'assets/img/banner4.png',
      'assets/img/banner5.png',
    ];
  }
}
