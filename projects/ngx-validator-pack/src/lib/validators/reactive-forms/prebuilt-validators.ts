/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */

import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
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
  space,
  spaceRestriction,
  ssn,
  timeHH_MM_12,
  timeHH_MM_24,
  timeHH_MM_SS_24,
  url,
  zipCode,
} from "../../constant/regex";
import { regexpValidation } from "../../validations/validations";

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper address format
 * (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const addressValidator =
  (
    errorName: string = "address",
    error: string = "Please input a value in a format of: Street number Street Name, City, State ZIP code."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: address,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const alphabetOnlyValidator =
  (
    errorName: string = "alphabetOnly",
    error: string = "Only alphabetic characters are allowed."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: lettersOnly,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateDD_MM_YYYYValidator =
  (
    errorName: string = "dateDD_MM_YYYY",
    error: string = "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: dateDD_MM_YYYY,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateYYYY_MM_DDValidator =
  (
    errorName: string = "dateYYYY_MM_DD",
    error: string = "Please input a value in a format: YYYY-MM-dd."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: dateYYYY_MM_DD,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const emailValidator =
  (
    errorName: string = "email",
    error: string = "Please input a value in a format: local-part@domain.com."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: email,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ipAddressValidator =
  (
    errorName: string = "ipAddress",
    error: string = "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: IPAddressV4AndV6,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv4Validator =
  (
    errorName: string = "iPv4",
    error: string = "Please input a value in a format: x.x.x.x."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: IPAddressV4,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv6Validator =
  (
    errorName: string = "iPv6",
    error: string = "Please input a value in a format: y:y:y:y:y:y:y:y."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: IPAddressV6,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const numericsOnlyValidator =
  (
    errorName: string = "numericsOnly",
    error: string = "Only numeric characters are allowed."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: numbersOnly,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const noSpecialsValidator =
  (
    errorName: string = "noSpecials",
    error: string = "No special characters are allowed."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: noSpecial,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passportValidator =
  (
    errorName: string = "passport",
    error: string = "Incorrect passport format."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: passport,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a strong password format
 * (Has at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and has
 * length of at least 8 characters).
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passwordValidator =
  (
    errorName: string = "password",
    error: string = "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: passwordStrength,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const phoneNumberValidator =
  (
    errorName: string = "phoneNumber",
    error: string = "Please input a value in a format: (000) 000 0000."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: phoneNumber,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const spaceValidator =
  (
    errorName: string = "space",
    error: string = "Space character is not allowed."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: space,
      error,
      errorName,
      logic: "!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const spaceRestrictionValidator =
  (
    errorName: string = "spaceRestriction",
    error: string = "Value can not start or end with a space character."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: spaceRestriction,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ssnValidator =
  (
    errorName: string = "ssn",
    error: string = "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: ssn,
      error,
      errorName,
      logic: "!!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_12Validator =
  (
    errorName: string = "timeHH_MM_12",
    error: string = "Please input a value in a HH:MM 12-hour format."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: timeHH_MM_12,
      error,
      errorName,
      logic: "!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_24Validator =
  (
    errorName: string = "timeHH_MM_24",
    error: string = "Please input a value in a HH:MM 24-hour format."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: timeHH_MM_24,
      error,
      errorName,
      logic: "!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_SS_24Validator =
  (
    errorName: string = "timeHH_MM_SS_24",
    error: string = "Please input a value in a HH:MM:SS 24-hour format."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: timeHH_MM_SS_24,
      error,
      errorName,
      logic: "!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const urlValidator =
  (
    errorName: string = "url",
    error: string = "Improper URL format."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: url,
      error,
      errorName,
      logic: "!",
    });
  };

/**
 * @publicApi
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param errorName                   - optional parameter representing error name
 * @param error                       - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const zipCodeValidator =
  (
    errorName: string = "zipCode",
    error: string = "Improper zip code format."
  ): ValidatorFn =>
  (control: AbstractControl): ValidationErrors | null => {
    return regexpValidation(control, {
      regExp: zipCode,
      error,
      errorName,
      logic: "!",
    });
  };
