import { Component } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';
import { NavItems } from '../../../../interfaces/@type';
import { navList } from '../../../../constant/navList';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header-navs',
  standalone: true,
  imports: [CommonModule, AntDesignModule, RouterModule],
  templateUrl: './header-navs.component.html',
  styleUrl: './header-navs.component.scss',
})
export class HeaderNavsComponent {
  public navList: NavItems[] = navList;
  public visible = false;

  constructor(private router: Router) {}

  close(): void {
    this.visible = false;
  }

  open(): void {
    this.visible = true;
  }

  navigateTo(route: any) {
    if (route) {
      this.router.navigate([route]);
      this.visible = false;
    }
  }
}
