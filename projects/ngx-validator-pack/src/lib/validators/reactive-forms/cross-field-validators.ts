/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import {
  requiredEtherValidation,
  requiredIfNotValidation,
  requiredIfValidation,
} from "../../validations/cross-field-validations";

/**
 * @publicApi
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * @param required                    - control name to receive the required error
 * @param check                       - control name who's value needs to be checked
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIf = (
  required: string,
  check: string,
  error?: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return requiredIfValidation(control, { required, check, error });
  };
};

/**
 * @publicApi
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * @param required                    - control name to receive the required error
 * @param check                       - control name who's value needs to be checked
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIfNot = (
  required: string,
  check: string,
  error?: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return requiredIfNotValidation(control, { required, check, error });
  };
};

/**
 * @publicApi
 * @description
 * Assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * @param required                    - name of the first control
 * @param check                       - name of the second control
 * @param error                       - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredEther = (
  required: string,
  check: string,
  error?: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return requiredEtherValidation(control, { required, check, error });
  };
};
