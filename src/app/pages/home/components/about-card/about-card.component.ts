import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';

@Component({
  selector: 'app-about-card',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './about-card.component.html',
  styleUrl: './about-card.component.scss',
})
export class AboutCardComponent {}
