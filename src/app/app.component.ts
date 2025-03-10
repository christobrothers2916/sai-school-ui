import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SpinnerComponent } from './pages/home/spinner/spinner.component';
import { HeaderNavsComponent } from './pages/home/components/header-navs/header-navs.component';
import { InformationComponent } from './pages/home/components/information/information.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    SpinnerComponent,
    HeaderNavsComponent,
    InformationComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
