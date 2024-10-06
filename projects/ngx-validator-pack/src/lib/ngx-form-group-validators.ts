/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors } from "@angular/forms";
import { removeErrors, setErrors } from "./helpers/errors";

export const requiredIf = (
  requiredControlName: string,
  controlToCheckName: string
) => {
  return (control: AbstractControl): ValidationErrors | null => {

    const required = control?.get(requiredControlName) as AbstractControl;
    const toCheck = control?.get(controlToCheckName) as AbstractControl;
    if (required?.value || !toCheck?.value) {
      removeErrors(required, ["required"]);
      return null;
    } else {
      const errorVal = `Required ${requiredControlName} when having ${controlToCheckName}.`;
      setErrors(required, { required: errorVal });
      return { [errorVal]: true };
    }
  };
};

export const requiredIfNot = (
  requiredControlName: string,
  controlToCheckName: string
) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const required = control?.get(requiredControlName) as AbstractControl;
    const toCheck = control?.get(controlToCheckName) as AbstractControl;
    if (required?.value || toCheck?.value) {
      removeErrors(required, ["required"]);
      return null;
    } else {
      const errorVal = `Required ${requiredControlName} when not having ${controlToCheckName}.`;
      setErrors(required, { required: errorVal });
      return { [errorVal]: true };
    }
  };
};

export const requiredEther = (
  requiredControlName: string,
  controlToCheckName: string
) => {
  return (control: AbstractControl): ValidationErrors | null => {
    const required = control?.get(requiredControlName) as AbstractControl;
    const toCheck = control?.get(controlToCheckName) as AbstractControl;
    if (required?.value || toCheck?.value) {
      removeErrors(required, ["required"]);
      removeErrors(toCheck, ["required"]);
      return null;
    } else {
      const errorVal = `Required either ${requiredControlName} or ${controlToCheckName}.`;
      setErrors(required, { required: errorVal });
      setErrors(toCheck, { required: errorVal });
      return { [errorVal]: true };
    }
  };
};
