import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { HeaderNavsComponent } from './components/header-navs/header-navs.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { CommonModule } from '@angular/common';
import { AcademiaComponent } from './components/academia/academia.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { InformationComponent } from './components/information/information.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AntDesignModule,
    HeaderNavsComponent,
    ImageBannerComponent,
    AcademiaComponent,
    InformationComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  providers: [NzModalService],
})
export class HomeComponent {
  constructor(private modal: NzModalService) {
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
      nzFooter: null,
      nzWidth: 500,
      nzClassName: 'video-modal',
      nzMaskClosable: false,
    });
  }
}
