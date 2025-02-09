import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzGridModule,
    NzImageModule,
    NzButtonModule,
    NzIconModule,
    NzDividerModule,
    NzMenuModule,
    NzDropDownModule,
    NzCarouselModule,
    NzCardModule,
  ],
  exports: [
    NzGridModule,
    NzImageModule,
    NzButtonModule,
    NzIconModule,
    NzDividerModule,
    NzMenuModule,
    NzDropDownModule,
    NzCarouselModule,
    NzCardModule,
  ],
})
export class AntDesignModule {}
