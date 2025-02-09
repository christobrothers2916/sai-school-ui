import { Component } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';
import { NavItems } from '../../../../interfaces/@type';
import { navList } from '../../../../constant/navList';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-navs',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './header-navs.component.html',
  styleUrl: './header-navs.component.scss',
})
export class HeaderNavsComponent {
  public navList: NavItems[] = navList;

  constructor() {}
}
