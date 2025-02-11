import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HeaderNavsComponent } from '../components/header-navs/header-navs.component';
import { InformationComponent } from '../components/information/information.component';
import { AntDesignModule } from '../../../shared/ant-design.module';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-admission',
  standalone: true,
  imports: [
    CommonModule,
    HeaderNavsComponent,
    InformationComponent,
    AntDesignModule,
    ReactiveFormsModule,
  ],
  templateUrl: './admission.component.html',
  styleUrl: './admission.component.scss',
})
export class AdmissionComponent implements OnInit {
  public validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.validateForm = this.fb.group({
      studentName: ['', [Validators.required]],
      dateofBirth: ['', [Validators.required]],
      admissionClass: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      previousSchool: [''],
      motrherTongue: ['', [Validators.required]],
      fatherName: ['', [Validators.required]],
      occupation: ['', [Validators.required]],
      mobile: ['', [MyValidators.required, MyValidators.mobile]],
      motherName: ['', [Validators.required]],
      motherccupation: ['', [Validators.required]],
      motherMobile: ['', [MyValidators.required, MyValidators.mobile]],
      guardian: ['', [Validators.required]],
      address: [''],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.router.navigateByUrl('/home');
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity();
        }
      });
    }
  }
}

export class MyValidators extends Validators {
  static mobile(control: AbstractControl): any | null {
    const value = control.value;
    if (isEmptyInputValue(value)) {
      return null;
    }
    return isMobile(value)
      ? null
      : {
          mobile: {
            en: `Mobile phone number is not valid`,
          },
        };
  }
}

function isEmptyInputValue(value: NzSafeAny): boolean {
  return value == null || value.length === 0;
}

function isMobile(value: string): boolean {
  return typeof value === 'string' && /^[6-9]\d{9}$/.test(value);
}
