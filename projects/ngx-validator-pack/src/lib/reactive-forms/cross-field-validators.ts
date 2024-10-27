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
} from "../validations/cross-field-validations";

/**
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has no value.
 *
 * @param {string}                    - control name to receive the required error
 * @param {string}                    - control name who's value needs to be checked
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIf = (
  requiredControlName: string,
  controlToCheckName: string,
  error?: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return requiredIfValidation(control, {
      requiredControlName,
      controlToCheckName,
      error,
    });
  };
};

/**
 * @description
 * Assigns a required error to the controls with a name was specified in the
 * first parameter if the control with a name specified in the second parameter
 * has a value.
 *
 * @param {string}                    - control name to receive the required error
 * @param {string}                    - control name who's value needs to be checked
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredIfNot = (
  requiredControlName: string,
  controlToCheckName: string,
  error?: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return requiredIfNotValidation(control, {
      requiredControlName,
      controlToCheckName,
      error,
    });
  };
};

/**
 * @description
 * Assigns a required error to both controls who's names are specified if nether one
 * has a value.
 *
 * @param {string}                    - name of the first control
 * @param {string}                    - name of the second control
 * @param {string}                    - error message - optional parameter
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredEther = (
  requiredControlName: string,
  controlToCheckName: string,
  error?: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    return requiredEtherValidation(control, {
      requiredControlName,
      controlToCheckName,
      error,
    });
  };
};
