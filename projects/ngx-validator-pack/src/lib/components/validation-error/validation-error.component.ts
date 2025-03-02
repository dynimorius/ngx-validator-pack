/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import {
  ChangeDetectorRef,
  Component,
  Input,
  Renderer2,
} from '@angular/core';
import { BaseComponent } from '../base/base.component';

/**
 * @internal
 * @description
 * A component showing the validation error to the user
 */
@Component({
  selector: '',
  standalone: true,
  imports: [],
  templateUrl: './validation-error.component.html',
  styleUrl: './validation-error.component.css',
})
export class ValidationErrorComponent extends BaseComponent {
  override defaultClass: string = 'show-validation-content';
  @Input() error!: string;

  constructor(
    override readonly renderer: Renderer2,
    override readonly changeDetectorRef: ChangeDetectorRef
  ) {
    super(renderer, changeDetectorRef);
  }
}
