/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ValidatorFn } from "@angular/forms";
import { ComparisonOperations } from "../../types";
/**
 * @publicApi
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl.
 *
 * @param regExp                      - Regular expression to check
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const regexpValidator: (regExp: RegExp, errorName?: string, error?: string) => ValidatorFn;
/**
 * @publicApi
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl.
 *
 * @param regExp                      - Regular expression to check
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const regexpNotValidator: (regExp: RegExp, errorName?: string, error?: string) => ValidatorFn;
/**
 * @publicApi
 * @description
 * Checks if the date in the given FromControl / AbstractControl is earlier then
 * the value in the specified FromControl / AbstractControl.
 *
 * @param date                        - Date to preform the check against
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const earlierThenValidator: (date: Date, errorName?: string, error?: string) => ValidatorFn;
/**
 * @description
 * Checks if the date in the given FromControl / AbstractControl is greater then
 * the value in the specified FromControl / AbstractControl.
 *
 * @param date                        - Date to preform the check against
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const laterThenValidator: (date: Date, errorName?: string, error?: string) => ValidatorFn;
/**
 * @description
 * Compares the date values of the given FromControl / AbstractControl and
 * specified FromControl / AbstractControl.
 *
 * @param fieldName                   - name of the filed to compare against
 * @param comparison                  - comparison to preform
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const compareToValidator: (fieldName: string, comparison: ComparisonOperations, errorName?: string, error?: string) => ValidatorFn;
/**
 * @description
 * Returns a validation error if a condition is met.
 *
 * @param conditional                 - conditional function or a boolean value
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const requiredWhenValidator: (conditional: (() => boolean) | boolean, errorName?: string, error?: string) => ValidatorFn;
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has no value
 * and specified FromControl / AbstractControl has it.
 *
 * @param link                        - name of the FromControl / AbstractControl to link to
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const linkToValidator: (link: string, errorName?: string, error?: string) => ValidatorFn;
/**
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * and specified FromControl / AbstractControl does not.
 *
 * @param link                        - name of the FromControl / AbstractControl
 *                                      which a given FromControl / AbstractControl is linked to
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const linkedToValidator: (link: string, errorName?: string, error?: string) => ValidatorFn;