import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { CommonModule } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  providers: [NzModalService],
})
export class AboutComponent {
  public imageBanner: string[] = [];

  constructor() {
    this.imageBanner = ['assets/img/aboutus-banner.png'];
  }
}
