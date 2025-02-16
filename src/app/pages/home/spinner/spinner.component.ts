import { ChangeDetectorRef, Component } from '@angular/core';
import { SpinnerService } from '../../../services/spinner/spinner.service';
import { AntDesignModule } from '../../../shared/ant-design.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule, AntDesignModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  public isShowSpinner: boolean = true;

  constructor(
    private spinnerService: SpinnerService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.init();
  }

  init(): void {
    this.spinnerService.getSpinnerObserver().subscribe((status) => {
      this.isShowSpinner = status === 'start';
      this.cdRef.detectChanges();
    });
  }
}
