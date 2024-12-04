/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { NgClass, NgFor } from '@angular/common';
import { ChangeDetectorRef, Component, Input, Renderer2 } from '@angular/core';
import { CheckedPipe } from '../../pipes/checked.pipe';
import { BaseComponent } from '../base/base.component';
import { Check } from '../../interfaces/check-config.interface';
import { ObjectValuesPipe } from '../../pipes/object-values.pipe';

@Component({
  selector: '',
  standalone: true,
  imports: [NgClass, NgFor, CheckedPipe, ObjectValuesPipe],
  templateUrl: './checks.component.html',
  styleUrl: './checks.component.css',
})
export class ChecksComponent extends BaseComponent {
  override defaultClass: string = 'checks-validation-content';
  _checks: Check = {};

  @Input() hasValue!: boolean;
  @Input() set checks(checkObj: { [key: string]: string }) {
    Object.entries(checkObj).forEach((entry) => {
      this._checks[entry[0]] = {
        msg: entry[1],
        hasError: false,
      };
    });
    this.changeDetectorRef.detectChanges();
  }
  @Input() set errors(errArr: string[] | null) {
    if (!errArr?.length) {
      Object.keys(this._checks).forEach((key: string) => {
        this._checks[key].hasError = false;
      });
      return;
    }
    errArr.forEach((error: string) => {
      if (this._checks[error]) {
        this._checks[error].hasError = true;
      }
    });
  }

  constructor(
    override readonly renderer: Renderer2,
    override readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super(renderer, changeDetectorRef);
  }
}
