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
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that 
 * was specified in the requiredControlName filed of the config parameter if the control 
 * with a name specified in the controlToCheckName parameter has no value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional 
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const requiredIfValidation = (
  control: AbstractControl,
  config: {
    required: string;
    check: string;
    error?: string;
  }
): ValidationErrors | null => {
  const required = control?.get(config.required) as AbstractControl;
  const toCheck = control?.get(config.check) as AbstractControl;
  if (required?.value || !toCheck?.value) {
    removeErrors(required, ["required"]);
    return null;
  } else {
    const errorVal =
      config.error ??
      `Required is ${config.required} when having ${config.check}.`;
    setErrors(required, { required: errorVal });
    return { [errorVal]: true };
  }
};

/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that 
 * was specified in the requiredControlName field of the config parameter if the control 
 * with a name specified in the controlToCheckName parameter has a value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional 
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const requiredIfNotValidation = (
  control: AbstractControl,
  config: {
    required: string;
    check: string;
    error?: string;
  }
): ValidationErrors | null => {
  const required = control?.get(config.required) as AbstractControl;
  const toCheck = control?.get(config.check) as AbstractControl;
  if (required?.value || toCheck?.value) {
    removeErrors(required, ["required"]);
    return null;
  } else {
    const errorVal =
      config.error ??
      `Required is ${config.required} when not having ${config.check}.`;
    setErrors(required, { required: errorVal });
    return { [errorVal]: true };
  }
};

/**
 * @internal
 * @description
 * A validation function which assigns a required error to the controls with a name that 
 * was specified in the requiredControlName field of the config parameter nether that control
 * or the control with a name specified in the controlToCheckName parameter has a value.
 *
 * @param control                      - form group
 * @param config                       - config parameter, consists of a
 *                                       required field name, a field name to check and optional 
 *                                       error string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const requiredEtherValidation = (
  control: AbstractControl,
  config: {
    required: string;
    check: string;
    error?: string;
  }
): ValidationErrors | null => {
  const required = control?.get(config.required) as AbstractControl;
  const toCheck = control?.get(config.check) as AbstractControl;
  if (required?.value || toCheck?.value) {
    removeErrors(required, ["required"]);
    removeErrors(toCheck, ["required"]);
    return null;
  } else {
    const errorVal =
      config.error ??
      `Required either ${config.required} or ${config.check}.`;
    setErrors(required, { required: errorVal });
    setErrors(toCheck, { required: errorVal });
    return { [errorVal]: true };
  }
};
