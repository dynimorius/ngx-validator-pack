/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors } from "@angular/forms";
import { removeErrors, setErrors } from "../helpers/errors";

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
) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const required = control?.get(requiredControlName) as AbstractControl;
    const toCheck = control?.get(controlToCheckName) as AbstractControl;
    if (required?.value || !toCheck?.value) {
      removeErrors(required, ["required"]);
      return null;
    } else {
      const errorVal =
        error ??
        `Required is ${requiredControlName} when having ${controlToCheckName}.`;
      setErrors(required, { required: errorVal });
      return { [errorVal]: true };
    }
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
) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const required = control?.get(requiredControlName) as AbstractControl;
    const toCheck = control?.get(controlToCheckName) as AbstractControl;
    if (required?.value || toCheck?.value) {
      removeErrors(required, ["required"]);
      return null;
    } else {
      const errorVal =
        error ??
        `Required is ${requiredControlName} when not having ${controlToCheckName}.`;
      setErrors(required, { required: errorVal });
      return { [errorVal]: true };
    }
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
) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const required = control?.get(requiredControlName) as AbstractControl;
    const toCheck = control?.get(controlToCheckName) as AbstractControl;
    if (required?.value || toCheck?.value) {
      removeErrors(required, ["required"]);
      removeErrors(toCheck, ["required"]);
      return null;
    } else {
      const errorVal =
        error ??
        `Required either ${requiredControlName} or ${controlToCheckName}.`;
      setErrors(required, { required: errorVal });
      setErrors(toCheck, { required: errorVal });
      return { [errorVal]: true };
    }
  };
};
