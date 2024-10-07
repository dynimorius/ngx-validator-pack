/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { ValidationErrors } from "@angular/forms";
import {
  regexpValidator,
  regexpNotValidator,
} from "./ngx-validators";
import {
  address,
  dateDD_MM_YYYY,
  dateYYYY_MM_DD,
  email,
  IPAddressV4,
  IPAddressV4AndV6,
  IPAddressV6,
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
} from "./constant/regex";

/**
 * Checks if a value in the given FromControl / AbstractControl is in a proper address format
 * (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const addressValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    address,
    (errorName = "address"),
    (error =
      "Please input a value in a format of: Street number Street Name, City, State ZIP code.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const alphabetOnlyValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    lettersOnly,
    (errorName = "alphabetOnly"),
    (error = "Only alphabetic characters are allowed.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateDD_MM_YYYYValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    dateDD_MM_YYYY,
    (errorName = "dateDD_MM_YYYY"),
    (error =
      "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateYYYY_MM_DDValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    dateYYYY_MM_DD,
    (errorName = "dateYYYY_MM_DD"),
    (error = "Please input a value in a format: YYYY-MM-dd.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const emailValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    email,
    (errorName = "email"),
    (error = "Please input a value in a format: local-part@domain.com.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ipAddressValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    IPAddressV4AndV6,
    (errorName = "ipAddress"),
    (error =
      "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv4Validator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    IPAddressV4,
    (errorName = "iPv4"),
    (error = "Please input a value in a format: x.x.x.x.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv6Validator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    IPAddressV6,
    (errorName = "iPv6"),
    (error = "Please input a value in a format: y:y:y:y:y:y:y:y.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const numericsOnlyValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    numbersOnly,
    (errorName = "numericsOnly"),
    (error = "Only numeric characters are allowed.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const noSpecialsValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    noSpecial,
    (errorName = "noSpecials"),
    (error = "No special characters are allowed.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passportValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    passport,
    (errorName = "passport"),
    (error = "Incorrect passport format.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a strong password format
 * (Has at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and has
 * length of at least 8 characters).
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passwordValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    passwordStrength,
    (errorName = "password"),
    (error =
      "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const phoneNumberValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    phoneNumber,
    (errorName = "phoneNumber"),
    (error = "Please input a value in a format: (000) 000 0000.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const singleSpaceValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpNotValidator(
    singleSpace,
    (errorName = "singleSpace"),
    (error = "A single space character is not allowed.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const spaceRestrictionValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    spaceRestriction,
    (errorName = "spaceRestriction"),
    (error = "Value can not start or end with a space character.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ssnValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    ssn,
    (errorName = "ssn"),
    (error =
      "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_12Validator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    timeHH_MM_12,
    (errorName = "timeHH_MM_12"),
    (error = "Please input a value in a HH:MM 12-hour format.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_24Validator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    timeHH_MM_24,
    (errorName = "timeHH_MM_24"),
    (error = "Please input a value in a HH:MM 24-hour format.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_SS_24Validator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    timeHH_MM_SS_24,
    (errorName = "timeHH_MM_SS_24"),
    (error = "Please input a value in a HH:MM:SS 24-hour format.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const urlValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    url,
    (errorName = "url"),
    (error = "Improper URL format.")
  );

/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const zipCodeValidator = (
  errorName?: string,
  error?: ValidationErrors | string
): ValidationErrors | null =>
  regexpValidator(
    zipCode,
    (errorName = "zipCode"),
    (error = "Improper zip code format.")
  );
