import { Component } from '@angular/core';
import { AntDesignModule } from '../../shared/ant-design.module';
import { CommonModule } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [NzModalService],
})
export class ContactComponent {
  constructor() {}
}
