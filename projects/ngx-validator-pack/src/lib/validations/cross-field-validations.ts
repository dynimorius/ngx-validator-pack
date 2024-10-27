/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors } from "@angular/forms";
import { removeErrors, setErrors } from "../helpers/errors";

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
