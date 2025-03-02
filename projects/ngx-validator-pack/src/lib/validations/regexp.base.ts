/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors } from "@angular/forms";
import { test } from "../helpers/regexp";
import { RegExpValidationConfig } from "../interfaces/validation-config.interface";
import { RegExpLogicalOperations } from "../types";

export function regExpBase(
  control: AbstractControl,
  config: RegExpValidationConfig,
  logic: RegExpLogicalOperations
): ValidationErrors | null {
  const errors: ValidationErrors = {
    [config.errorName ?? "regexp"]: config.error,
  };
  return !control.value || test(config.regExp, control.value, logic)
    ? null
    : errors;
}
