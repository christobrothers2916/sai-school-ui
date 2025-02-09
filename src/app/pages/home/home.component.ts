import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { HeaderNavsComponent } from './components/header-navs/header-navs.component';
import { ImageBannerComponent } from './components/image-banner/image-banner.component';
import { CommonModule } from '@angular/common';
import { AcademiaComponent } from './components/academia/academia.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AntDesignModule,
    HeaderNavsComponent,
    ImageBannerComponent,
    AcademiaComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
}
