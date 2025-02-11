import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.scss',
})
export class InformationComponent {}
