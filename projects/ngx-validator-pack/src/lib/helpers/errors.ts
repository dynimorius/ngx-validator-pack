/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors } from "@angular/forms";

/**
 * @internal
 * @description
 * Sets an error on a given control
 *
 * @param control                     - FromControl / AbstractControl to set the error to
 * @param error                       - error content { [key: string]: unknown }
 */
export const setErrors = (
  control: AbstractControl,
  error: ValidationErrors
): void => {
  control.setErrors({ ...control.errors, ...error });
};

/**
 * @internal
 * @description
 * Removes errors on a given control
 *
 * @param control                     - FromControl / AbstractControl from which
 *                                      to remove error
 * @param keys                        - array of error names
 */
export const removeErrors = (
  control: AbstractControl,
  keys: string[]
): void => {
  const remainingErrors: ValidationErrors = keys.reduce(
    (errors: ValidationErrors, key: string): ValidationErrors => {
      delete errors[key];
      return errors;
    },
    { ...control.errors }
  );

  control.setErrors(
    Object.keys(remainingErrors).length > 0 ? remainingErrors : null
  );
};
