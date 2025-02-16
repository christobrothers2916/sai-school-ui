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
import emailjs from '@emailjs/browser';
import { SpinnerService } from '../../../services/spinner/spinner.service';
import { NzMessageService } from 'ng-zorro-antd/message';

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
    private router: Router,
    private spinnerService: SpinnerService,
    private message: NzMessageService
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
      guardian: [''],
      address: [''],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.spinnerService.requestStarted();
      const templateParams = {
        from_name: 'ABC User',
        from_email: 'abc@example.com',
        to_name: 'XXX User',
        to_email: 'christobrothers2916@gmail.com',
        message: JSON.stringify(this.validateForm.value),
      };
      emailjs
        .send('service_eacvjj2', 'template_tgy827c', templateParams, {
          publicKey: '7PF34pzFk09kwhJnr',
        })
        .then(
          (response) => {
            this.spinnerService.requestEnded();
            this.message.create('success', `Submitted successfully!`);
            setTimeout(() => {
              this.router.navigateByUrl('/home');
            }, 1000);
          },
          (err) => {
            this.spinnerService.requestEnded();
            this.message.create('error', `Submission failed!`);
          }
        );
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
