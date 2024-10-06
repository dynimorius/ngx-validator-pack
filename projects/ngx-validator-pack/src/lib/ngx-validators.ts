/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import {
  compareDates,
  ComparisonOperations,
  prepareToCompare,
} from "./helpers/date";

/**
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpMatchValidator =
  (
    regexp: RegExp,
    errorName?: string,
    error?: ValidationErrors | string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error || "This control did not match a given regular expression.";
    const errors: ValidationErrors =
      typeof error === "string"
        ? { [errorName || "regexpValidator"]: error }
        : error;

    return !control.value || regexp.test(control.value) ? null : errors;
  };

/**
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const regexpNotAMatchValidator =
  (
    regexp: RegExp,
    errorName?: string,
    error?: ValidationErrors | string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error || "This control matched a given regular expression.";
    const errors: ValidationErrors =
      typeof error === "string"
        ? { [errorName || "regexpValidator"]: error }
        : error;

    return !control.value || !regexp.test(control.value) ? null : errors;
  };

/**
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const earlierThenValidator =
  (
    date: Date,
    errorName?: string,
    error?: ValidationErrors | string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error || `This control must have a value earlier then ${date}.`;
    const errors: ValidationErrors =
      typeof error === "string"
        ? { [errorName || "earlierThen"]: error }
        : error;

    return prepareToCompare(control?.value) < prepareToCompare(date)
      ? null
      : errors;
  };

/**
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const laterThenValidator =
  (
    date: Date,
    errorName?: string,
    error?: ValidationErrors | string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error || `This control must have a value later then ${date}.`;
    const errors: ValidationErrors =
      typeof error === "string" ? { [errorName || "laterThen"]: error } : error;

    return prepareToCompare(control?.value) > prepareToCompare(date)
      ? null
      : errors;
  };

/**
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl
 *
 * @param {string}                    - name of the filed to compare against
 * @param {ComparisonOperations}      - comparison to preform
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const compareToValidator =
  (
    filedName: string,
    comparison: ComparisonOperations,
    errorName?: string,
    error?: ValidationErrors | string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    const date = control.parent?.get(filedName)?.value;
    if (date) {
      error = error || `Value comparison with ${date} failed.`;
      const errors: ValidationErrors =
        typeof error === "string"
          ? { [errorName || "dateComparison"]: error }
          : error;
      return control.value && compareDates(control.value, date, comparison)
        ? null
        : errors;
    }
    return null;
  };

/**
 * Returns a validation error if a condition is met
 *
 * @param {Function | boolean}        - conditional function or a boolean value
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const requiredWhenValidator =
  (
    conditional: (() => boolean) | boolean,
    errorName?: string,
    error?: ValidationErrors | string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error || "This control has a conditional set on it.";
    const errors: ValidationErrors =
      typeof error === "string"
        ? { [errorName || "requiredWhen"]: error }
        : error;

    const outcome =
      typeof conditional === "function" ? conditional() : conditional;
    return !control.value && outcome ? errors : null;
  };

/**
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it
 *
 * @param {string}                    - name of the FromControl / AbstractControl to link to
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkToValidator =
  (
    linkTo: string,
    errorName?: string,
    error?: ValidationErrors | string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error || `This control has a link to ${linkTo}.`;
    const errors: ValidationErrors =
      typeof error === "string" ? { [errorName || "linkTo"]: error } : error;

    const linkedTo = control.parent?.get(linkTo);
    return !control?.value && !!linkedTo?.value ? errors : null;
  };

/**
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not
 *
 * @param {string}                    - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const linkedToValidator =
  (
    linkedTo: string,
    errorName?: string,
    error?: ValidationErrors | string
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    error = error || `This control is linked to ${linkedTo}.`;
    const errors: ValidationErrors =
      typeof error === "string" ? { [errorName || "linkTo"]: error } : error;

    const link = control.parent?.get(linkedTo);
    return !!control?.value && !link?.value ? errors : null;
  };
