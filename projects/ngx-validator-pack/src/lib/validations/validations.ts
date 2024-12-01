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
import {
  CompareValidationConfig,
  ConditionalValidationConfig,
  CountValidationConfig,
  DateValidationConfig,
  LengthValidationConfig,
  LinkValidationConfig,
  RangeValidationConfig,
  RegExpValidationConfig,
} from "../interfaces/validation-config.interface";
import { test } from "../helpers/regexp";

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
  const errors: ValidationErrors = { [config.errorName ?? "regexp"]: error };

  return !control.value ||
    test(config.regExp, control.value, config?.logic ?? "!!")
    ? null
    : errors;
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
    [config.errorName ?? "required"]: error,
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
 * @returns {ValidationErrors | null}  - Validation error
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

/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value that fails a given
 * length comparison.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       length to check, comparison to preform 
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const lengthValidation = (
  control: AbstractControl,
  config: LengthValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ?? `The required length should be ${config.comparison} ${config.length}.`;
  const errors: ValidationErrors = { [config.errorName ?? "length"]: error };

  return !!control?.value &&
    compare(control?.value?.length, config.length, config.comparison ?? "===")
    ? errors
    : null;
};

/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl value is not in a given range.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       start value to check and end value to check
 *                                       as well as optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const rangeValidation = (
  control: AbstractControl,
  config: RangeValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ?? `Value must be in the range between ${config.start} and ${config.end}.`;
  const errors: ValidationErrors = { [config.errorName ?? "range"]: error };

  return !!control?.value &&
    compare(control.value.length, config.start, ">=") &&
    compare(control.value.length, config.end, '<=' )
    ? errors
    : null;
};

/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl has a value that fails a given
 * word count comparison.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       word count to check, comparison to preform 
 *                                       and optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const wordCountValidation = (
  control: AbstractControl,
  config: CountValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ?? `The required word count should be ${config.comparison} ${config.count}.`;
  const errors: ValidationErrors = { [config.errorName ?? "wordCount"]: error };

  const valueCount = control?.value?.split(' ');
  return !!control?.value &&
    compare(valueCount, config.count, config.comparison ?? "===")
    ? errors
    : null;
}

/**
 * @internal
 * @description
 * A validation function which returns a validation error if a given
 * FromControl / AbstractControl value is not in a given word count range.
 *
 * @param control                      - form control
 * @param config                       - config parameter, consists of a
 *                                       start value to check and end value to check
 *                                       as well as optional error and error name string
 * @returns {ValidationErrors | null}  - Validation error
 */
export const wordCountRangeValidation = (
  control: AbstractControl,
  config: RangeValidationConfig
): ValidationErrors | null => {
  const error =
    config.error ?? `The word count must be in the range between ${config.start} and ${config.end}.`;
  const errors: ValidationErrors = { [config.errorName ?? "wordCountRange"]: error };
  const valueCount = control?.value?.split(' ');

  return !!control?.value &&
    compare(valueCount, config.start, ">=") &&
    compare(valueCount, config.end, '<=' )
    ? errors
    : null;
};

/**
 * @internal
 * @description
 * A validation function which returns a validation error if any
 * of the validations from the given sequence return an error.
 * The sequence order meters as the first fail will be returned.
 *
 * @param control                      - form control
 * @param sequence                     - sequence of configs that consists of
 *                                       validation functions and configs for those 
 *                                       functions.
 * @returns {ValidationErrors | null}  - Validation error
 */
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
