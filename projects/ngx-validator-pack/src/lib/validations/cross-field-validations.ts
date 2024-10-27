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
 * A validation function which assigns a required error to the controls with a name that 
 * was specified in the requiredControlName filed of the config parameter if the control 
 * with a name specified in the controlToCheckName parameter has no value.
 *
 * @param {AbstractControl}                    - form group
 * @param {
 *         requiredControlName: string, 
 *         controlToCheckName: string,
 *         error?: string
 *        }                                    - config parameter
 * @returns {ValidationErrors | null}          - Validation error
 */
export const requiredIfValidation = (
  control: AbstractControl,
  config: {
    requiredControlName: string;
    controlToCheckName: string;
    error?: string;
  }
): ValidationErrors | null => {
  const required = control?.get(config.requiredControlName) as AbstractControl;
  const toCheck = control?.get(config.controlToCheckName) as AbstractControl;
  if (required?.value || !toCheck?.value) {
    removeErrors(required, ["required"]);
    return null;
  } else {
    const errorVal =
      config.error ??
      `Required is ${config.requiredControlName} when having ${config.controlToCheckName}.`;
    setErrors(required, { required: errorVal });
    return { [errorVal]: true };
  }
};

/**
 * @description
 * A validation function which assigns a required error to the controls with a name that 
 * was specified in the requiredControlName field of the config parameter if the control 
 * with a name specified in the controlToCheckName parameter has a value.
 *
 * @param {AbstractControl}                    - form group
 * @param {
 *         requiredControlName: string, 
 *         controlToCheckName: string,
 *         error?: string
 *        }                                    - config parameter
 * @returns {ValidationErrors | null}          - Validation error
 */
export const requiredIfNotValidation = (
  control: AbstractControl,
  config: {
    requiredControlName: string;
    controlToCheckName: string;
    error?: string;
  }
): ValidationErrors | null => {
  const required = control?.get(config.requiredControlName) as AbstractControl;
  const toCheck = control?.get(config.controlToCheckName) as AbstractControl;
  if (required?.value || toCheck?.value) {
    removeErrors(required, ["required"]);
    return null;
  } else {
    const errorVal =
      config.error ??
      `Required is ${config.requiredControlName} when not having ${config.controlToCheckName}.`;
    setErrors(required, { required: errorVal });
    return { [errorVal]: true };
  }
};

/**
 * @description
 * A validation function which assigns a required error to the controls with a name that 
 * was specified in the requiredControlName field of the config parameter nether that control
 * or the control with a name specified in the controlToCheckName parameter has a value.
 *
 * @param {AbstractControl}                    - form group
 * @param {
 *         requiredControlName: string, 
 *         controlToCheckName: string,
 *         error?: string
 *        }                                    - config parameter
 * @returns {ValidationErrors | null}          - Validation error
 */
export const requiredEtherValidation = (
  control: AbstractControl,
  config: {
    requiredControlName: string;
    controlToCheckName: string;
    error?: string;
  }
): ValidationErrors | null => {
  const required = control?.get(config.requiredControlName) as AbstractControl;
  const toCheck = control?.get(config.controlToCheckName) as AbstractControl;
  if (required?.value || toCheck?.value) {
    removeErrors(required, ["required"]);
    removeErrors(toCheck, ["required"]);
    return null;
  } else {
    const errorVal =
      config.error ??
      `Required either ${config.requiredControlName} or ${config.controlToCheckName}.`;
    setErrors(required, { required: errorVal });
    setErrors(toCheck, { required: errorVal });
    return { [errorVal]: true };
  }
};
