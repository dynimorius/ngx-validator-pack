/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ValidatorFn } from "@angular/forms";
import { ComparisonOperations, RegExpLogicalOperations } from "../../types";
/**
 * @publicApi
 * @description
 * Preforms a RegEx check on value in the given FromControl / AbstractControl.
 *
 * @param regExp                      - Regular expression to check
 * @param logic                       - what kind of logic to preform !! = match, ! = not a match
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const regexpValidator: (regExp: RegExp, logic: RegExpLogicalOperations, errorName?: string, error?: string) => ValidatorFn;
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
 * @publicApi
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
 * @publicApi
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
 * @publicApi
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
 * @publicApi
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
 * @publicApi
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
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * that fails a given length comparison.
 *
 * @param length                      - numeric value of length to compere to
 * @param comparison                  - numeric value of a comparison to preform
 *                                      available options are:
 *                                        "<" , ">" , "==" , "===" , "<=" and ">="
 *                                      default is: "==="
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const lengthValidator: (length: number, comparison?: ComparisonOperations, errorName?: string, error?: string) => ValidatorFn;
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * that is not in a given range.
 *
 * @param start                       - a minimum length value
 * @param end                         - a maximum length value
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const rangeValidator: (start: number, end: number, errorName?: string, error?: string) => ValidatorFn;
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * that fails a given word count comparison.
 *
 * @param count                       - numeric value of word count to compere to
 * @param comparison                  - numeric value of a comparison to preform
 *                                      available options are:
 *                                        "<" , ">" , "==" , "===" , "<=" and ">="
 *                                      default is: "==="
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const wordCountValidator: (count: number, comparison?: ComparisonOperations, errorName?: string, error?: string) => ValidatorFn;
/**
 * @publicApi
 * @description
 * Returns a validation error if a given FromControl / AbstractControl has a value
 * whit a word count is not in a given range.
 *
 * @param start                       - a minimum word count value
 * @param end                         - a maximum word count value
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const wordCountRangeValidator: (start: number, end: number, errorName?: string, error?: string) => ValidatorFn;
