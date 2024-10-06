/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl } from "@angular/forms";

export const setErrors = (
    control: AbstractControl,
    error: { [key: string]: unknown }
  ): void => {
    control.setErrors({ ...control.errors, ...error });
  }
  
export const removeErrors = (control: AbstractControl, keys: string[]): void => {
    const remainingErrors = keys.reduce(
      (errors, key): { [x: string]: unknown } => {
        delete errors[key];
        return errors;
      },
      {
        ...control.errors,
      }
    );
    control.setErrors(
      Object.keys(remainingErrors).length > 0 ? remainingErrors : null
    );
  }