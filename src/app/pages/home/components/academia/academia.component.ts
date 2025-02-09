import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AntDesignModule } from '../../../../shared/ant-design.module';

@Component({
  selector: 'app-academia',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './academia.component.html',
  styleUrl: './academia.component.scss',
})
export class AcademiaComponent {}
