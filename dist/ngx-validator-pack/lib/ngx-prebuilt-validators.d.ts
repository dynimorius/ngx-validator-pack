/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { ValidationErrors } from "@angular/forms";
/**
 * Checks if a value in the given FromControl / AbstractControl is in a proper address format
 * (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const addressValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const alphabetOnlyValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const dateDD_MM_YYYYValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const dateYYYY_MM_DDValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const emailValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const ipAddressValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const iPv4Validator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const iPv6Validator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const numericsOnlyValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const noSpecialsValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const passportValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a strong password format
 * (Has at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and has
 * length of at least 8 characters).
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const passwordValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const phoneNumberValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const singleSpaceValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const spaceRestrictionValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const ssnValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const timeHH_MM_12Validator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const timeHH_MM_24Validator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const timeHH_MM_SS_24Validator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const urlValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export declare const zipCodeValidator: (errorName?: string, error?: ValidationErrors | string) => ValidationErrors | null;
