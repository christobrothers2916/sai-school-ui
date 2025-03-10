import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { CommonModule } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss',
  providers: [NzModalService],
})
export class ProgramsComponent {
  constructor() {}
}
