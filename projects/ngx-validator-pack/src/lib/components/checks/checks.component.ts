/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { NgClass, NgFor } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  Input,
  Renderer2,
} from '@angular/core';
import { CheckedPipe } from '../../pipes/checked.pipe';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: '',
  standalone: true,
  imports: [NgClass, NgFor, CheckedPipe],
  templateUrl: './checks.component.html',
  styleUrl: './checks.component.css',
})
export class ChecksComponent extends BaseComponent {
  _checks: { check: string; msg: string; hasError: boolean }[] = [];

  @Input() hasValue!: boolean;
  @Input() set checks(checkObj: string[]) {
    Object.entries(checkObj).forEach((entry) => {
      this._checks.push({
        check: entry[0],
        msg: entry[1],
        hasError: false,
      });
    });
    this.changeDetectorRef.detectChanges();
  }
  @Input() set errors(errArr: string[] | null) {
    if (!errArr?.length) {
      this._checks.forEach((check) => (check.hasError = false));
      return;
    }
    errArr.forEach((error: string) => {
      this._checks.map((check) => {
        if (check.check === error) {
          check.hasError = true;
        }
      });
    });
  }

  constructor(
    override readonly renderer: Renderer2,
    override readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super(renderer, changeDetectorRef);
  }
}
