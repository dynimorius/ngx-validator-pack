/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ValidationErrors, ValidatorFn } from "@angular/forms";
import { ComparisonOperations } from "./helpers/date";
/**
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const regexpMatchValidator: (regexp: RegExp, errorName?: string, error?: ValidationErrors | string) => ValidatorFn;
/**
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const regexpNotAMatchValidator: (regexp: RegExp, errorName?: string, error?: ValidationErrors | string) => ValidatorFn;
/**
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const earlierThenValidator: (date: Date, errorName?: string, error?: ValidationErrors | string) => ValidatorFn;
/**
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl
 *
 * @param {AbstractControl}           - AbstractControl to preform the check against
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const laterThenValidator: (date: Date, errorName?: string, error?: ValidationErrors | string) => ValidatorFn;
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
export declare const compareToValidator: (filedName: string, comparison: ComparisonOperations, errorName?: string, error?: ValidationErrors | string) => ValidatorFn;
/**
 * Returns a validation error if a condition is met
 *
 * @param {Function | boolean}        - conditional function or a boolean value
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const requiredWhenValidator: (conditional: (() => boolean) | boolean, errorName?: string, error?: ValidationErrors | string) => ValidatorFn;
/**
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it
 *
 * @param {string}                    - name of the FromControl / AbstractControl to link to
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const linkToValidator: (linkTo: string, errorName?: string, error?: ValidationErrors | string) => ValidatorFn;
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
export declare const linkedToValidator: (linkedTo: string, errorName?: string, error?: ValidationErrors | string) => ValidatorFn;
