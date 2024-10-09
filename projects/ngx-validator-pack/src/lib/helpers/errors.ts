/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl } from "@angular/forms";

/**
 * @description
 * Sets an error on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl to set the error to 
 * @param {{ [key: string]: unknown }}- error content
 */
export const setErrors = (
    control: AbstractControl,
    error: { [key: string]: unknown }
  ): void => {
    control.setErrors({ ...control.errors, ...error });
}
  
/**
 * @description
 * Removes errors on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl from which
 *                                      to remove error
 * @param {string[]}                  - list of error names
 */
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