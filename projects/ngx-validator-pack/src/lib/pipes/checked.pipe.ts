/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { Pipe, PipeTransform } from '@angular/core';

/**
 * @internal
 */
@Pipe({
  name: 'checked',
  standalone: true,
})
export class CheckedPipe implements PipeTransform {
  transform(value: boolean | null | undefined): unknown {
    return value ? '✗' : '✔';
  }
}
