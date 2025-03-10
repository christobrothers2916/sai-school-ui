import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, AntDesignModule, RouterModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {
  // navigateTo(route) {
  // }
}
