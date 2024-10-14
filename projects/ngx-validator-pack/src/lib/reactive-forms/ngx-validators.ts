/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import {
  ComparisonOperations,
  compareDates,
  prepareToCompare,
} from "../helpers/date";

/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpValidator =
  (regexp: RegExp, errorName?: string, error?: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error ?? "This control did not match a given regular expression.";
    const errors: ValidationErrors = {
      [errorName ?? "regexpValidator"]: error,
    };

    return !control.value || regexp.test(control.value) ? null : errors;
  };

/**
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpNotValidator =
  (regexp: RegExp, errorName?: string, error?: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error ?? "This control matched a given regular expression.";
    const errors: ValidationErrors = {
      [errorName ?? "regexpNotValidator"]: error,
    };

    return !control.value || !regexp.test(control.value) ? null : errors;
  };

/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const earlierThenValidator =
  (date: Date, errorName?: string, error?: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error ?? `This control must have a value earlier then ${date}.`;
    const errors: ValidationErrors = { [errorName ?? "earlierThen"]: error };

    return prepareToCompare(control?.value) < prepareToCompare(date)
      ? null
      : errors;
  };

/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const laterThenValidator =
  (date: Date, errorName?: string, error?: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error ?? `This control must have a value later then ${date}.`;
    const errors: ValidationErrors = { [errorName ?? "laterThen"]: error };

    return prepareToCompare(control?.value) > prepareToCompare(date)
      ? null
      : errors;
  };

/**
 * @description
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl
 *
 * @param {string}                    - name of the filed to compare against
 * @param {ComparisonOperations}      - comparison to preform
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const compareToValidator =
  (
    filedName: string,
    comparison: ComparisonOperations,
    errorName?: string,
    error?: string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const date = control.parent?.get(filedName)?.value;
    if (date) {
      error = error ?? `Value comparison with ${date} failed.`;
      const errors: ValidationErrors = {
        [errorName ?? "dateComparison"]: error,
      };
      return control.value && compareDates(control.value, date, comparison)
        ? null
        : errors;
    }
    return null;
  };

/**
 * @description
 * Returns a validation error if a condition is met
 *
 * @param {Function | boolean}        - conditional function or a boolean value
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredWhenValidator =
  (
    conditional: (() => boolean) | boolean,
    errorName?: string,
    error?: string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error ?? "This control has a conditional set on it.";
    const errors: ValidationErrors = { [errorName ?? "requiredWhen"]: error };

    const outcome =
      typeof conditional === "function" ? conditional() : conditional;
    return !control.value && outcome ? errors : null;
  };

/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it
 *
 * @param {string}                    - name of the FromControl / AbstractControl to link to
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkToValidator =
  (linkTo: string, errorName?: string, error?: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error ?? `This control has a link to ${linkTo}.`;
    const errors: ValidationErrors = { [errorName ?? "linkTo"]: error };

    const linkedTo = control.parent?.get(linkTo);
    return !control?.value && !!linkedTo?.value ? errors : null;
  };

/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not
 *
 * @param {string}                    - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkedToValidator =
  (linkedTo: string, errorName?: string, error?: string): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error ?? `This control is linked to ${linkedTo}.`;
    const errors: ValidationErrors = { [errorName ?? "linkTo"]: error };

    const link = control.parent?.get(linkedTo);
    return !!control?.value && !link?.value ? errors : null;
  };
