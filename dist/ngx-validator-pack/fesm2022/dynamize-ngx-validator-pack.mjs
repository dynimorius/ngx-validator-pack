import * as i0 from '@angular/core';
import { Directive, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import * as i1 from '@angular/forms';

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
const prepareToCompare = (date, bufferYears) => {
    if (date) {
        const p_Date = new Date(date);
        const year = p_Date.getFullYear() + (bufferYears || 0);
        const month = p_Date.getMonth() + 1;
        const day = p_Date.getDate();
        return Number.parseInt(`${year}${month.toString().replace.length > 1 ? month : '0' + month}${day.toString().length > 1 ? day : '0' + day}`);
    }
    else {
        return 0;
    }
};
const compareDates = (date1, date2, operation = '===') => {
    return compare(date1, date2, operation);
};
const compare = (date1, date2, comparison) => {
    const operations = {
        '<': (a, b) => prepareToCompare(a) < prepareToCompare(b),
        '>': (a, b) => prepareToCompare(a) > prepareToCompare(b),
        '==': (a, b) => prepareToCompare(a) == prepareToCompare(b),
        '===': (a, b) => prepareToCompare(a) === prepareToCompare(b),
        '<=': (a, b) => prepareToCompare(a) <= prepareToCompare(b),
        '>=': (a, b) => prepareToCompare(a) >= prepareToCompare(b),
    };
    return operations[comparison](date1, date2);
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * Preforms a RegEx check on value in the given FromControl / AbstractControl
 *
 * @param {RegExp}                    - Regular expression to check
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const regexpValidator = (regexp, errorName, error) => (control) => {
    error = error || "This control did not match a given regular expression.";
    const errors = typeof error === "string"
        ? { [errorName ?? "regexpValidator"]: error }
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
const regexpNotValidator = (regexp, errorName, error) => (control) => {
    error = error || "This control matched a given regular expression.";
    const errors = typeof error === "string"
        ? { [errorName ?? "regexpValidator"]: error }
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
const earlierThenValidator = (date, errorName, error) => (control) => {
    error = error || `This control must have a value earlier then ${date}.`;
    const errors = typeof error === "string"
        ? { [errorName ?? "earlierThen"]: error }
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
const laterThenValidator = (date, errorName, error) => (control) => {
    error = error || `This control must have a value later then ${date}.`;
    const errors = typeof error === "string" ? { [errorName ?? "laterThen"]: error } : error;
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
const compareToValidator = (filedName, comparison, errorName, error) => (control) => {
    const date = control.parent?.get(filedName)?.value;
    if (date) {
        error = error || `Value comparison with ${date} failed.`;
        const errors = typeof error === "string"
            ? { [errorName ?? "dateComparison"]: error }
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
const requiredWhenValidator = (conditional, errorName, error) => (control) => {
    error = error || "This control has a conditional set on it.";
    const errors = typeof error === "string"
        ? { [errorName ?? "requiredWhen"]: error }
        : error;
    const outcome = typeof conditional === "function" ? conditional() : conditional;
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
const linkToValidator = (linkTo, errorName, error) => (control) => {
    error = error || `This control has a link to ${linkTo}.`;
    const errors = typeof error === "string" ? { [errorName ?? "linkTo"]: error } : error;
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
const linkedToValidator = (linkedTo, errorName, error) => (control) => {
    error = error || `This control is linked to ${linkedTo}.`;
    const errors = typeof error === "string" ? { [errorName ?? "linkTo"]: error } : error;
    const link = control.parent?.get(linkedTo);
    return !!control?.value && !link?.value ? errors : null;
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
// Checks id an input in a format of Street number Street Name, City, State ZIP code
const address = /^(\d{1,}) [a-zA-Z0-9\s]+(\,)? [a-zA-Z]+(\,)? [A-Z]{2} [0-9]{5,6}$/;
// Checks for date format YYYY-MM-dd
const dateYYYY_MM_DD = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
// Checks for date format  dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY
// with check for leap year
const dateDD_MM_YYYY = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
// Checks if input is an email
const email = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// Checks if input is in a IPv4 format
const IPAddressV4 = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/;
// Checks if input is in a IPv6 format
const IPAddressV6 = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;
// Checks if input is in a IPv4 or IPv6 format
const IPAddressV4AndV6 = /((^\s*((([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))\s*$)|(^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$))/;
// Checks if an input consists of letters only
const lettersOnly = /^[A-Za-z]+$/;
// Checks if the input consists of letters, periods, hyphens and spaces
const lettersPeriodsHyphensAndSpaces = /^[a-zA-Z\s.-]+$/;
// Checks if input contains any special characters
const noSpecial = /^[A-Za-z0-9 ]+$/;
// Checks if an input consists of numbers only
const numbersOnly = /^\d+$/;
// Checks if input is in passport format
const passport = /^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
// Checks if input consist of at least 1 lowercase letter, 1 uppercase letter,
// 1 number, 1 special character and has length of at least 8 characters
const passwordStrength = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
// Checks for a (000) 000 0000 phone format
const phoneNumber = /^(\()?[2-9]{1}\d{2}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
// Checks for a single space character
const singleSpace = /[\s]/;
// Restrict only spaces, spaces at the beginning and end of the field
const spaceRestriction = /^\S$|^\S[\s\S]*\S$/;
// Checks if input is in an Social Security Number format
const ssn = /^((?!219-09-9999|078-05-1120)(?!666|000|9\d{2})\d{3}-(?!00)\d{2}-(?!0{4})\d{4})|((?!219 09 9999|078 05 1120)(?!666|000|9\d{2})\d{3} (?!00)\d{2} (?!0{4})\d{4})|((?!219099999|078051120)(?!666|000|9\d{2})\d{3}(?!00)\d{2}(?!0{4})\d{4})$/;
// Checks for Time Format HH:MM 12-hour with optional leading 0
const timeHH_MM_12 = /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/;
// Checks for Time Format HH:MM 24-hour with optional leading 0
const timeHH_MM_24 = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
// Checks for Time Format HH:MM:SS 24-hour
const timeHH_MM_SS_24 = /(?:[01]\d|2[0123]):(?:[012345]\d):(?:[012345]\d)/;
// Checks if input is a url
const url = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
// Checks of a zip code in formats 00000 or 00000-0000
const zipCode = /(^\d{5}$)|(^\d{5}-\d{4}$)/;

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * Checks if a value in the given FromControl / AbstractControl is in a proper address format
 * (Street number Street Name, City, State ZIP code)
 * Example: 3344 W Alameda Avenue, Lakewood, CO 80222
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const addressValidator = (errorName, error) => regexpValidator(address, (errorName = "address"), (error =
    "Please input a value in a format of: Street number Street Name, City, State ZIP code."));
/**
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const alphabetOnlyValidator = (errorName, error) => regexpValidator(lettersOnly, (errorName = "alphabetOnly"), (error = "Only alphabetic characters are allowed."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const dateDD_MM_YYYYValidator = (errorName, error) => regexpValidator(dateDD_MM_YYYY, (errorName = "dateDD_MM_YYYY"), (error =
    "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const dateYYYY_MM_DDValidator = (errorName, error) => regexpValidator(dateYYYY_MM_DD, (errorName = "dateYYYY_MM_DD"), (error = "Please input a value in a format: YYYY-MM-dd."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const emailValidator = (errorName, error) => regexpValidator(email, (errorName = "email"), (error = "Please input a value in a format: local-part@domain.com."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const ipAddressValidator = (errorName, error) => regexpValidator(IPAddressV4AndV6, (errorName = "ipAddress"), (error =
    "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y"));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const iPv4Validator = (errorName, error) => regexpValidator(IPAddressV4, (errorName = "iPv4"), (error = "Please input a value in a format: x.x.x.x."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const iPv6Validator = (errorName, error) => regexpValidator(IPAddressV6, (errorName = "iPv6"), (error = "Please input a value in a format: y:y:y:y:y:y:y:y."));
/**
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const numericsOnlyValidator = (errorName, error) => regexpValidator(numbersOnly, (errorName = "numericsOnly"), (error = "Only numeric characters are allowed."));
/**
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const noSpecialsValidator = (errorName, error) => regexpValidator(noSpecial, (errorName = "noSpecials"), (error = "No special characters are allowed."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const passportValidator = (errorName, error) => regexpValidator(passport, (errorName = "passport"), (error = "Incorrect passport format."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a strong password format
 * (Has at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and has
 * length of at least 8 characters).
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const passwordValidator = (errorName, error) => regexpValidator(passwordStrength, (errorName = "password"), (error =
    "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const phoneNumberValidator = (errorName, error) => regexpValidator(phoneNumber, (errorName = "phoneNumber"), (error = "Please input a value in a format: (000) 000 0000."));
/**
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const singleSpaceValidator = (errorName, error) => regexpNotValidator(singleSpace, (errorName = "singleSpace"), (error = "A single space character is not allowed."));
/**
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const spaceRestrictionValidator = (errorName, error) => regexpValidator(spaceRestriction, (errorName = "spaceRestriction"), (error = "Value can not start or end with a space character."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const ssnValidator = (errorName, error) => regexpValidator(ssn, (errorName = "ssn"), (error =
    "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_12Validator = (errorName, error) => regexpValidator(timeHH_MM_12, (errorName = "timeHH_MM_12"), (error = "Please input a value in a HH:MM 12-hour format."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_24Validator = (errorName, error) => regexpValidator(timeHH_MM_24, (errorName = "timeHH_MM_24"), (error = "Please input a value in a HH:MM 24-hour format."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const timeHH_MM_SS_24Validator = (errorName, error) => regexpValidator(timeHH_MM_SS_24, (errorName = "timeHH_MM_SS_24"), (error = "Please input a value in a HH:MM:SS 24-hour format."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const urlValidator = (errorName, error) => regexpValidator(url, (errorName = "url"), (error = "Improper URL format."));
/**
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {ValidationErrors | string} - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
const zipCodeValidator = (errorName, error) => regexpValidator(zipCode, (errorName = "zipCode"), (error = "Improper zip code format."));

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * Sets an error on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl to set the error to
 * @param {{ [key: string]: unknown }}- error content
 */
const setErrors = (control, error) => {
    control.setErrors({ ...control.errors, ...error });
};
/**
 * @description
 * Removes errors on a given control
 *
 * @param {AbstractControl}           - FromControl / AbstractControl from which
 *                                      to remove error
 * @param {string[]}                  - list of error names
 */
const removeErrors = (control, keys) => {
    const remainingErrors = keys.reduce((errors, key) => {
        delete errors[key];
        return errors;
    }, {
        ...control.errors,
    });
    control.setErrors(Object.keys(remainingErrors).length > 0 ? remainingErrors : null);
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
const requiredIf = (requiredControlName, controlToCheckName) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || !toCheck?.value) {
            removeErrors(required, ["required"]);
            return null;
        }
        else {
            const errorVal = `Required ${requiredControlName} when having ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            return { [errorVal]: true };
        }
    };
};
const requiredIfNot = (requiredControlName, controlToCheckName) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || toCheck?.value) {
            removeErrors(required, ["required"]);
            return null;
        }
        else {
            const errorVal = `Required ${requiredControlName} when not having ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            return { [errorVal]: true };
        }
    };
};
const requiredEther = (requiredControlName, controlToCheckName) => {
    return (control) => {
        const required = control?.get(requiredControlName);
        const toCheck = control?.get(controlToCheckName);
        if (required?.value || toCheck?.value) {
            removeErrors(required, ["required"]);
            removeErrors(toCheck, ["required"]);
            return null;
        }
        else {
            const errorVal = `Required either ${requiredControlName} or ${controlToCheckName}.`;
            setErrors(required, { required: errorVal });
            setErrors(toCheck, { required: errorVal });
            return { [errorVal]: true };
        }
    };
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
/**
 * @description
 * Default styles for the showValidation Directive
 * {@link ShowValidationDirective}
 */
const DefaultStyle = {
    font_size: "small",
    font_family: `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    color: "salmon",
    background_color: "",
    border: "none",
    border_radius: "5px",
};

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
class ShowValidationDirective {
    constructor(elementRef, renderer, control) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.control = control;
        this.controlSub = new Subscription();
        this.errorStyle = DefaultStyle;
    }
    ngOnInit() {
        const formControl = this.control.control;
        this.parent = this.elementRef.nativeElement.parentElement;
        this.self = this.elementRef.nativeElement;
        this.container = this.renderer.createElement("div");
        this.renderer.appendChild(this.container, this.self);
        this.renderer.appendChild(this.parent, this.container);
        this.setStyles();
        this.controlSub.add(formControl.statusChanges.subscribe((status) => {
            if (status === "INVALID") {
                if (!this.span) {
                    this.showError(formControl.errors);
                }
            }
            else {
                this.hideError();
            }
        }));
    }
    ngOnDestroy() {
        this.controlSub.unsubscribe();
    }
    setStyles() {
        this.renderer.setStyle(this.container, "display", "flex");
        this.renderer.setStyle(this.container, "flex-direction", "column");
        this.renderer.setStyle(this.container, "gap", "10px");
        Object.entries(this.errorStyle).forEach((style) => {
            this.renderer.setStyle(this.container, style[0].replace('_', '-'), style[1]);
        });
    }
    showError(errors) {
        this.span = this.renderer.createElement("span");
        this.span.innerHTML = this.getValidationMessage(errors);
        this.renderer.appendChild(this.container, this.span);
        this.renderer.setStyle(this.span, 'padding', '0px 0px 10px 10px');
    }
    hideError() {
        if (this.container && this.span) {
            this.renderer.removeChild(this.container, this.span);
            this.span = null;
        }
    }
    getValidationMessage(errors) {
        return errors ? Object.values(errors)[0] : "Invalid Input.";
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, deps: [{ token: i0.ElementRef }, { token: i0.Renderer2 }, { token: i1.NgControl }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "17.3.12", type: ShowValidationDirective, isStandalone: true, selector: "[showValidation]", inputs: { errorStyle: "errorStyle" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: ShowValidationDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[showValidation]",
                    standalone: true,
                }]
        }], ctorParameters: () => [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.NgControl }], propDecorators: { errorStyle: [{
                type: Input
            }] } });

/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 *
 * Public API Surface of ngx-validator-pack
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ShowValidationDirective, addressValidator, alphabetOnlyValidator, compareToValidator, dateDD_MM_YYYYValidator, dateYYYY_MM_DDValidator, earlierThenValidator, emailValidator, iPv4Validator, iPv6Validator, ipAddressValidator, laterThenValidator, linkToValidator, linkedToValidator, noSpecialsValidator, numericsOnlyValidator, passportValidator, passwordValidator, phoneNumberValidator, regexpNotValidator, regexpValidator, requiredEther, requiredIf, requiredIfNot, requiredWhenValidator, singleSpaceValidator, spaceRestrictionValidator, ssnValidator, timeHH_MM_12Validator, timeHH_MM_24Validator, timeHH_MM_SS_24Validator, urlValidator, zipCodeValidator };
//# sourceMappingURL=dynamize-ngx-validator-pack.mjs.map
