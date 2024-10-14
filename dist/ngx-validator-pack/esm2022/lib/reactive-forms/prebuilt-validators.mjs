/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { IPAddressV4, IPAddressV4AndV6, IPAddressV6, address, dateDD_MM_YYYY, dateYYYY_MM_DD, email, lettersOnly, noSpecial, numbersOnly, passport, passwordStrength, phoneNumber, singleSpace, spaceRestriction, ssn, timeHH_MM_12, timeHH_MM_24, timeHH_MM_SS_24, url, zipCode, } from "../constant/regex";
import { regexpNotValidator, regexpValidator, } from "./reactive-forms-validators";
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
export const addressValidator = (errorName = "address", error = "Please input a value in a format of: Street number Street Name, City, State ZIP code.") => regexpValidator(address, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * alphabetic characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const alphabetOnlyValidator = (errorName = "alphabetOnly", error = "Only alphabetic characters are allowed.") => regexpValidator(lettersOnly, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: dd-MM-YYYY, dd.MM.YYYY or dd/MM/YYYY.
 *
 * @param {string}                    - optional parameter representing error name
 * @param { string}                   - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateDD_MM_YYYYValidator = (errorName = "dateDD_MM_YYYY", error = "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY.") => regexpValidator(dateDD_MM_YYYY, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * YYYY-MM-dd.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const dateYYYY_MM_DDValidator = (errorName = "dateYYYY_MM_DD", error = "Please input a value in a format: YYYY-MM-dd.") => regexpValidator(dateYYYY_MM_DD, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * local-part@domain.com.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const emailValidator = (errorName = "email", error = "Please input a value in a format: local-part@domain.com.") => regexpValidator(email, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: x.x.x.x or y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ipAddressValidator = (errorName = "ipAddress", error = "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y.") => regexpValidator(IPAddressV4AndV6, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * x.x.x.x.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv4Validator = (errorName = "iPv4", error = "Please input a value in a format: x.x.x.x.") => regexpValidator(IPAddressV4, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * y:y:y:y:y:y:y:y.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const iPv6Validator = (errorName = "iPv6", error = "Please input a value in a format: y:y:y:y:y:y:y:y.") => regexpValidator(IPAddressV6, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of only
 * numeric characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const numericsOnlyValidator = (errorName = "numericsOnly", error = "Only numeric characters are allowed.") => regexpValidator(numbersOnly, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl has any special characters.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const noSpecialsValidator = (errorName = "noSpecials", error = "No special characters are allowed.") => regexpValidator(noSpecial, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a proper passport format
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const passportValidator = (errorName = "passport", error = "Incorrect passport format.") => regexpValidator(passport, errorName, error);
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
export const passwordValidator = (errorName = "password", error = "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8.") => regexpValidator(passwordStrength, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a following format:
 * (000) 000 0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const phoneNumberValidator = (errorName = "phoneNumber", error = "Please input a value in a format: (000) 000 0000.") => regexpValidator(phoneNumber, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl consists of a single space
 * character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const singleSpaceValidator = (errorName = "singleSpace", error = "A single space character is not allowed.") => regexpNotValidator(singleSpace, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl starts or ends with a
 * space character.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const spaceRestrictionValidator = (errorName = "spaceRestriction", error = "Value can not start or end with a space character.") => regexpValidator(spaceRestriction, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: AAA-GGG-SSSS or AAAGGGSSSS.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const ssnValidator = (errorName = "ssn", error = "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.") => regexpValidator(ssn, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 12-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_12Validator = (errorName = "timeHH_MM_12", error = "Please input a value in a HH:MM 12-hour format.") => regexpValidator(timeHH_MM_12, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM 24-hour with optional leading 0.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_24Validator = (errorName = "timeHH_MM_24", error = "Please input a value in a HH:MM 24-hour format.") => regexpValidator(timeHH_MM_24, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * Time Format HH:MM:SS 24-hour.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const timeHH_MM_SS_24Validator = (errorName = "timeHH_MM_SS_24", error = "Please input a value in a HH:MM:SS 24-hour format.") => regexpValidator(timeHH_MM_SS_24, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in a
 * correct url format.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const urlValidator = (errorName = "url", error = "Improper URL format.") => regexpValidator(url, errorName, error);
/**
 * @description
 * Checks if a value in the given FromControl / AbstractControl is in one of the
 * following formats: 00000 or 00000-0000.
 *
 * @param {string}                    - optional parameter representing error name
 * @param {string}                    - optional parameter representing error value
 * @returns {ValidationErrors | null} - Validation error
 */
export const zipCodeValidator = (errorName = "zipCode", error = "Improper zip code format.") => regexpValidator(zipCode, errorName, error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3JlYWN0aXZlLWZvcm1zL3ByZWJ1aWx0LXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLE9BQU8sRUFDUCxjQUFjLEVBQ2QsY0FBYyxFQUNkLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLEdBQUcsRUFDSCxZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixHQUFHLEVBQ0gsT0FBTyxHQUNSLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixlQUFlLEdBQ2hCLE1BQU0sNkJBQTZCLENBQUM7QUFFckM7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDOUIsWUFBb0IsU0FBUyxFQUM3QixRQUFnQix1RkFBdUYsRUFDOUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRXpFOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQUcsQ0FDbkMsWUFBb0IsY0FBYyxFQUNsQyxRQUFnQix5Q0FBeUMsRUFDaEMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBRTdFOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQUcsQ0FDckMsWUFBb0IsZ0JBQWdCLEVBQ3BDLFFBQWdCLDRGQUE0RixFQUNuRixF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LENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IFNsYXZrbyBNaWhhamxvdmljIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGF0IGh0dHBzOi8vd3d3LmlzYy5vcmcvbGljZW5zZXMvXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgVmFsaWRhdGlvbkVycm9ycyB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5pbXBvcnQge1xyXG4gIElQQWRkcmVzc1Y0LFxyXG4gIElQQWRkcmVzc1Y0QW5kVjYsXHJcbiAgSVBBZGRyZXNzVjYsXHJcbiAgYWRkcmVzcyxcclxuICBkYXRlRERfTU1fWVlZWSxcclxuICBkYXRlWVlZWV9NTV9ERCxcclxuICBlbWFpbCxcclxuICBsZXR0ZXJzT25seSxcclxuICBub1NwZWNpYWwsXHJcbiAgbnVtYmVyc09ubHksXHJcbiAgcGFzc3BvcnQsXHJcbiAgcGFzc3dvcmRTdHJlbmd0aCxcclxuICBwaG9uZU51bWJlcixcclxuICBzaW5nbGVTcGFjZSxcclxuICBzcGFjZVJlc3RyaWN0aW9uLFxyXG4gIHNzbixcclxuICB0aW1lSEhfTU1fMTIsXHJcbiAgdGltZUhIX01NXzI0LFxyXG4gIHRpbWVISF9NTV9TU18yNCxcclxuICB1cmwsXHJcbiAgemlwQ29kZSxcclxufSBmcm9tIFwiLi4vY29uc3RhbnQvcmVnZXhcIjtcclxuaW1wb3J0IHtcclxuICByZWdleHBOb3RWYWxpZGF0b3IsXHJcbiAgcmVnZXhwVmFsaWRhdG9yLFxyXG59IGZyb20gXCIuL3JlYWN0aXZlLWZvcm1zLXZhbGlkYXRvcnNcIjtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgcHJvcGVyIGFkZHJlc3MgZm9ybWF0XHJcbiAqIChTdHJlZXQgbnVtYmVyIFN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSBaSVAgY29kZSlcclxuICogRXhhbXBsZTogMzM0NCBXIEFsYW1lZGEgQXZlbnVlLCBMYWtld29vZCwgQ08gODAyMjJcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImFkZHJlc3NcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdCBvZjogU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKGFkZHJlc3MsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgY29uc2lzdHMgb2Ygb25seVxyXG4gKiBhbHBoYWJldGljIGNoYXJhY3RlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBhbHBoYWJldE9ubHlWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImFscGhhYmV0T25seVwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIk9ubHkgYWxwaGFiZXRpYyBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkLlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcihsZXR0ZXJzT25seSwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXHJcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZLCBkZC5NTS5ZWVlZIG9yIGRkL01NL1lZWVkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHsgc3RyaW5nfSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBkYXRlRERfTU1fWVlZWVZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwiZGF0ZUREX01NX1lZWVlcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZIG9yIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IoZGF0ZUREX01NX1lZWVksIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBZWVlZLU1NLWRkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGF0ZVlZWVlfTU1fRERWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImRhdGVZWVlZX01NX0REXCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IFlZWVktTU0tZGQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKGRhdGVZWVlZX01NX0RELCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogbG9jYWwtcGFydEBkb21haW4uY29tLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW1haWxWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImVtYWlsXCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IGxvY2FsLXBhcnRAZG9tYWluLmNvbS5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IoZW1haWwsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gb25lIG9mIHRoZVxyXG4gKiBmb2xsb3dpbmcgZm9ybWF0czogeC54LngueCBvciB5Onk6eTp5Onk6eTp5OnkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBpcEFkZHJlc3NWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlwQWRkcmVzc1wiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IHgueC54Lnggb3IgeTp5Onk6eTp5Onk6eTp5LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+XHJcbiAgcmVnZXhwVmFsaWRhdG9yKElQQWRkcmVzc1Y0QW5kVjYsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiB4LngueC54LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaVB2NFZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwiaVB2NFwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB4LngueC54LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcihJUEFkZHJlc3NWNCwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6XHJcbiAqIHk6eTp5Onk6eTp5Onk6eS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlQdjZWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlQdjZcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogeTp5Onk6eTp5Onk6eTp5LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcihJUEFkZHJlc3NWNiwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBjb25zaXN0cyBvZiBvbmx5XHJcbiAqIG51bWVyaWMgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG51bWVyaWNzT25seVZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwibnVtZXJpY3NPbmx5XCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiT25seSBudW1lcmljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKG51bWJlcnNPbmx5LCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm9TcGVjaWFsc1ZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwibm9TcGVjaWFsc1wiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIk5vIHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3Iobm9TcGVjaWFsLCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgcHJvcGVyIHBhc3Nwb3J0IGZvcm1hdFxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFzc3BvcnRWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInBhc3Nwb3J0XCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiSW5jb3JyZWN0IHBhc3Nwb3J0IGZvcm1hdC5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IocGFzc3BvcnQsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBzdHJvbmcgcGFzc3dvcmQgZm9ybWF0XHJcbiAqIChIYXMgYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIDEgbnVtYmVyLCAxIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBoYXNcclxuICogbGVuZ3RoIG9mIGF0IGxlYXN0IDggY2hhcmFjdGVycykuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwicGFzc3dvcmRcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJUaGUgdmFsdWUgaGFzIHRvIGNvbnRhaW4gYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhcyBhIGxlbmd0aCBvZiA4LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+XHJcbiAgcmVnZXhwVmFsaWRhdG9yKHBhc3N3b3JkU3RyZW5ndGgsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiAoMDAwKSAwMDAgMDAwMC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBob25lTnVtYmVyVmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJwaG9uZU51bWJlclwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiAoMDAwKSAwMDAgMDAwMC5cIlxyXG4pOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiByZWdleHBWYWxpZGF0b3IocGhvbmVOdW1iZXIsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgY29uc2lzdHMgb2YgYSBzaW5nbGUgc3BhY2VcclxuICogY2hhcmFjdGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2luZ2xlU3BhY2VWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNpbmdsZVNwYWNlXCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiQSBzaW5nbGUgc3BhY2UgY2hhcmFjdGVyIGlzIG5vdCBhbGxvd2VkLlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cE5vdFZhbGlkYXRvcihzaW5nbGVTcGFjZSwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBzdGFydHMgb3IgZW5kcyB3aXRoIGFcclxuICogc3BhY2UgY2hhcmFjdGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VSZXN0cmljdGlvblZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwic3BhY2VSZXN0cmljdGlvblwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlZhbHVlIGNhbiBub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBzcGFjZSBjaGFyYWN0ZXIuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT5cclxuICByZWdleHBWYWxpZGF0b3Ioc3BhY2VSZXN0cmljdGlvbiwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXHJcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiBBQUEtR0dHLVNTU1Mgb3IgQUFBR0dHU1NTUy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNzblZhbGlkYXRvciA9IChcclxuICBlcnJvck5hbWU6IHN0cmluZyA9IFwic3NuXCIsXHJcbiAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogQUFBLUdHRy1TU1NTIG9yIEFBQUdHR1NTU1MuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKHNzbiwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIFRpbWUgRm9ybWF0IEhIOk1NIDEyLWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aW1lSEhfTU1fMTJWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInRpbWVISF9NTV8xMlwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU0gMTItaG91ciBmb3JtYXQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKHRpbWVISF9NTV8xMiwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIFRpbWUgRm9ybWF0IEhIOk1NIDI0LWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aW1lSEhfTU1fMjRWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInRpbWVISF9NTV8yNFwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU0gMjQtaG91ciBmb3JtYXQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKHRpbWVISF9NTV8yNCwgZXJyb3JOYW1lLCBlcnJvcik7XHJcblxyXG4vKipcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIFRpbWUgRm9ybWF0IEhIOk1NOlNTIDI0LWhvdXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aW1lSEhfTU1fU1NfMjRWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInRpbWVISF9NTV9TU18yNFwiLFxyXG4gIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU06U1MgMjQtaG91ciBmb3JtYXQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT5cclxuICByZWdleHBWYWxpZGF0b3IodGltZUhIX01NX1NTXzI0LCBlcnJvck5hbWUsIGVycm9yKTtcclxuXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGFcclxuICogY29ycmVjdCB1cmwgZm9ybWF0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXJsVmFsaWRhdG9yID0gKFxyXG4gIGVycm9yTmFtZTogc3RyaW5nID0gXCJ1cmxcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJJbXByb3BlciBVUkwgZm9ybWF0LlwiXHJcbik6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHJlZ2V4cFZhbGlkYXRvcih1cmwsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG5cclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gb25lIG9mIHRoZVxyXG4gKiBmb2xsb3dpbmcgZm9ybWF0czogMDAwMDAgb3IgMDAwMDAtMDAwMC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9ICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0ge3N0cmluZ30gICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHppcENvZGVWYWxpZGF0b3IgPSAoXHJcbiAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInppcENvZGVcIixcclxuICBlcnJvcjogc3RyaW5nID0gXCJJbXByb3BlciB6aXAgY29kZSBmb3JtYXQuXCJcclxuKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4gcmVnZXhwVmFsaWRhdG9yKHppcENvZGUsIGVycm9yTmFtZSwgZXJyb3IpO1xyXG4iXX0=