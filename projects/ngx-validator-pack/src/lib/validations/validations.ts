/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors } from "@angular/forms";
import { compareDates } from "../helpers/date";
import { compare } from "../helpers/numbers";
import { SequenceConfig } from "../interfaces/sequence-config.interface";
import { regExpBase } from "./regexp.base";
import { CompareValidationConfig, ConditionalValidationConfig, DateValidationConfig, LengthValidationConfig, LinkValidationConfig, RegExpValidationConfig } from "../interfaces/validation-config.interface";

/**
 * @internal
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       regexp to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const regexpValidation = (
  control: AbstractControl,
  config: RegExpValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ?? "This control did not match a given regular expression.";

  return regExpBase(control, { ...config, error }, "!!");
};

/**
 * @internal
 * @description
 * A validation function which preforms a RegEx check on value in the
 * given FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       regexp to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}          - Validation error
 */
export const regexpNotValidation = (
  control: AbstractControl,
  config: RegExpValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ?? "This control matched a given regular expression.";

  return regExpBase(control, { ...config, error }, "!");
};

/**
 * @internal
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is earlier then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param {AbstractControl}                    - form control
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       date to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const earlierThenValidation = (
  control: AbstractControl,
  config: DateValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ??
    `This control must have a value earlier then ${config.date}.`;
  const errors: ValidationErrors = {
    [config.errorName ?? "earlierThen"]: error,
  };

  return compareDates(control.value, config.date, "<") ? null : errors;
};

/**
 * @internal
 * @description
 * A validation function which checks if the date in the given
 * FromControl / AbstractControl is greater then the value in the specified
 * FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       date to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}     - Validation error
 */
export const laterThenValidation = (
  control: AbstractControl,
  config: DateValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ?? `This control must have a value later then ${config.date}.`;
  const errors: ValidationErrors = { [config.errorName ?? "laterThen"]: error };

  return compareDates(control.value, config.date, ">") ? null : errors;
};

/**
 * @internal
 * @description
 * A validation function which compares the date values of the given
 * FromControl / AbstractControl and specified FromControl / AbstractControl.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const compareToValidation = (
  control: AbstractControl,
  config: CompareValidationConfig
): ValidationErrors | null => {
  const date = control.parent?.get(config.fieldName)?.value;
  if (date) {
    const error = config.error ?? `Value comparison with ${date} failed.`;
    const errors: ValidationErrors = {
      [config.errorName ?? "dateComparison"]: error,
    };
    return control.value && compareDates(control.value, date, config.comparison)
      ? null
      : errors;
  }
  return null;
};

/**
 * @internal
 * @description
 * A validation function which returns a validation error if a condition is met.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       conditional function or boolean to check
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const requiredWhenValidation = (
  control: AbstractControl,
  config: ConditionalValidationConfig
): ValidationErrors | null => {
  const error = config.error ?? "This control has a conditional set on it.";
  const errors: ValidationErrors = {
    [config.errorName ?? "requiredWhen"]: error,
  };

  const outcome =
    typeof config.conditional === "function"
      ? config.conditional()
      : config.conditional;
  return !control.value && outcome ? errors : null;
};

/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has no value and specified
 * FromControl / AbstractControl has it.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const linkToValidation = (
  control: AbstractControl,
  config: LinkValidationConfig
): ValidationErrors | null => {
  const error = config.error ?? `This control has a link to ${config.link}.`;
  const errors: ValidationErrors = { [config.errorName ?? "linkTo"]: error };
  const linkedTo = control.parent?.get(config.link);

  return !control?.value && !!linkedTo?.value ? errors : null;
};

/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value and specified
 * FromControl / AbstractControl does not.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       field name to check and optional error and
 *                                       error name string
 * @returns {ValidationErrors | null}   - Validation error
 */
export const linkedToValidation = (
  control: AbstractControl,
  config: LinkValidationConfig
): ValidationErrors | null => {
  const error = config.error ?? `This control is linked to ${config.link}.`;
  const errors: ValidationErrors = { [config.errorName ?? "linkTo"]: error };
  const link = control.parent?.get(config.link);

  return !!control?.value && !link?.value ? errors : null;
};

export const lengthValidation = (
  control: AbstractControl,
  config: LengthValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ?? `The minimum required length is ${config.length}.`;
  const errors: ValidationErrors = { [config.errorName ?? "length"]: error };

  return !!control?.value &&
    compare(control?.value?.length, config.length, config.comparison ?? "<")
    ? errors
    : null;
};

export const sequentialValidation = (
  control: AbstractControl,
  sequence: SequenceConfig[]
): ValidationErrors | null => {
  let validationError!: ValidationErrors;
  const hasError = sequence.some((validation): boolean => {
    const error = validation.validationFun(control, {
      ...validation.validationFunConfig,
    });
    if (error) {
      validationError = error;
      return true;
    }
    return false;
  });
  return hasError ? validationError : null;
};
