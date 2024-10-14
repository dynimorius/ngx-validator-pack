/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { ValidationErrors } from "@angular/forms";
import {
  IPAddressV4,
  IPAddressV4AndV6,
  IPAddressV6,
  address,
  dateDD_MM_YYYY,
  dateYYYY_MM_DD,
  email,
  lettersOnly,
  noSpecial,
  numbersOnly,
  passport,
  passwordStrength,
  phoneNumber,
  singleSpace,
  spaceRestriction,
  ssn,
  timeHH_MM_12,
  timeHH_MM_24,
  timeHH_MM_SS_24,
  url,
  zipCode,
} from "../constant/regex";
import {
  regexpNotValidator,
  regexpValidator,
} from "./reactive-forms-validators";

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper address format
 * (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const addressValidator = (
  errorName: string = "address",
  error: string = "Please input a value in a format of: Street number Street Name, City, State ZIP code."
): ValidationErrors | null => regexpValidator(address, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const alphabetOnlyValidator = (
  errorName: string = "alphabetOnly",
  error: string = "Only alphabetic characters are allowed."
): ValidationErrors | null => regexpValidator(lettersOnly, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param {string}                    - optional parameter representing error name
 * @param { string}                   - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateDD_MM_YYYYValidator = (
  errorName: string = "dateDD_MM_YYYY",
  error: string = "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY."
): ValidationErrors | null => regexpValidator(dateDD_MM_YYYY, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateYYYY_MM_DDValidator = (
  errorName: string = "dateYYYY_MM_DD",
  error: string = "Please input a value in a format: YYYY-MM-dd."
): ValidationErrors | null => regexpValidator(dateYYYY_MM_DD, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const emailValidator = (
  errorName: string = "email",
  error: string = "Please input a value in a format: local-part@domain.com."
): ValidationErrors | null => regexpValidator(email, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ipAddressValidator = (
  errorName: string = "ipAddress",
  error: string = "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y."
): ValidationErrors | null =>
  regexpValidator(IPAddressV4AndV6, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv4Validator = (
  errorName: string = "iPv4",
  error: string = "Please input a value in a format: x.x.x.x."
): ValidationErrors | null => regexpValidator(IPAddressV4, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv6Validator = (
  errorName: string = "iPv6",
  error: string = "Please input a value in a format: y:y:y:y:y:y:y:y."
): ValidationErrors | null => regexpValidator(IPAddressV6, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const numericsOnlyValidator = (
  errorName: string = "numericsOnly",
  error: string = "Only numeric characters are allowed."
): ValidationErrors | null => regexpValidator(numbersOnly, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const noSpecialsValidator = (
  errorName: string = "noSpecials",
  error: string = "No special characters are allowed."
): ValidationErrors | null => regexpValidator(noSpecial, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passportValidator = (
  errorName: string = "passport",
  error: string = "Incorrect passport format."
): ValidationErrors | null => regexpValidator(passport, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a strong password format
 * (Has at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and has
 * length of at least 8 characters).
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passwordValidator = (
  errorName: string = "password",
  error: string = "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8."
): ValidationErrors | null =>
  regexpValidator(passwordStrength, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const phoneNumberValidator = (
  errorName: string = "phoneNumber",
  error: string = "Please input a value in a format: (000) 000 0000."
): ValidationErrors | null => regexpValidator(phoneNumber, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const singleSpaceValidator = (
  errorName: string = "singleSpace",
  error: string = "A single space character is not allowed."
): ValidationErrors | null => regexpNotValidator(singleSpace, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const spaceRestrictionValidator = (
  errorName: string = "spaceRestriction",
  error: string = "Value can not start or end with a space character."
): ValidationErrors | null =>
  regexpValidator(spaceRestriction, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ssnValidator = (
  errorName: string = "ssn",
  error: string = "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS."
): ValidationErrors | null => regexpValidator(ssn, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_12Validator = (
  errorName: string = "timeHH_MM_12",
  error: string = "Please input a value in a HH:MM 12-hour format."
): ValidationErrors | null => regexpValidator(timeHH_MM_12, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_24Validator = (
  errorName: string = "timeHH_MM_24",
  error: string = "Please input a value in a HH:MM 24-hour format."
): ValidationErrors | null => regexpValidator(timeHH_MM_24, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_SS_24Validator = (
  errorName: string = "timeHH_MM_SS_24",
  error: string = "Please input a value in a HH:MM:SS 24-hour format."
): ValidationErrors | null =>
  regexpValidator(timeHH_MM_SS_24, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const urlValidator = (
  errorName: string = "url",
  error: string = "Improper URL format."
): ValidationErrors | null => regexpValidator(url, errorName, error);

/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const zipCodeValidator = (
  errorName: string = "zipCode",
  error: string = "Improper zip code format."
): ValidationErrors | null => regexpValidator(zipCode, errorName, error);
