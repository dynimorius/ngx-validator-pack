/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { IPAddressV4, IPAddressV4AndV6, IPAddressV6, address, dateDD_MM_YYYY, dateYYYY_MM_DD, email, lettersOnly, noSpecial, numbersOnly, passport, passwordStrength, phoneNumber, singleSpace, spaceRestriction, ssn, timeHH_MM_12, timeHH_MM_24, timeHH_MM_SS_24, url, zipCode, } from "../constant/regex";
import { regexpValidation } from "../validations/validations";
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
export const addressValidator = (errorName = "address", error = "Please input a value in a format of: Street number Street Name, City, State ZIP code.") => (control) => {
    return regexpValidation(control, { regExp: address, error, errorName });
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
export const alphabetOnlyValidator = (errorName = "alphabetOnly", error = "Only alphabetic characters are allowed.") => (control) => {
    return regexpValidation(control, { regExp: lettersOnly, error, errorName });
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
export const dateDD_MM_YYYYValidator = (errorName = "dateDD_MM_YYYY", error = "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY.") => (control) => {
    return regexpValidation(control, {
        regExp: dateDD_MM_YYYY,
        error,
        errorName,
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
export const dateYYYY_MM_DDValidator = (errorName = "dateYYYY_MM_DD", error = "Please input a value in a format: YYYY-MM-dd.") => (control) => {
    return regexpValidation(control, {
        regExp: dateYYYY_MM_DD,
        error,
        errorName,
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
export const emailValidator = (errorName = "email", error = "Please input a value in a format: local-part@domain.com.") => (control) => {
    return regexpValidation(control, { regExp: email, error, errorName });
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
export const ipAddressValidator = (errorName = "ipAddress", error = "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y.") => (control) => {
    return regexpValidation(control, {
        regExp: IPAddressV4AndV6,
        error,
        errorName,
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
export const iPv4Validator = (errorName = "iPv4", error = "Please input a value in a format: x.x.x.x.") => (control) => {
    return regexpValidation(control, { regExp: IPAddressV4, error, errorName });
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
export const iPv6Validator = (errorName = "iPv6", error = "Please input a value in a format: y:y:y:y:y:y:y:y.") => (control) => {
    return regexpValidation(control, { regExp: IPAddressV6, error, errorName });
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
export const numericsOnlyValidator = (errorName = "numericsOnly", error = "Only numeric characters are allowed.") => (control) => {
    return regexpValidation(control, { regExp: numbersOnly, error, errorName });
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
export const noSpecialsValidator = (errorName = "noSpecials", error = "No special characters are allowed.") => (control) => {
    return regexpValidation(control, { regExp: noSpecial, error, errorName });
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
export const passportValidator = (errorName = "passport", error = "Incorrect passport format.") => (control) => {
    return regexpValidation(control, { regExp: passport, error, errorName });
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
export const passwordValidator = (errorName = "password", error = "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8.") => (control) => {
    return regexpValidation(control, {
        regExp: passwordStrength,
        error,
        errorName,
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
export const phoneNumberValidator = (errorName = "phoneNumber", error = "Please input a value in a format: (000) 000 0000.") => (control) => {
    return regexpValidation(control, { regExp: phoneNumber, error, errorName });
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
export const singleSpaceValidator = (errorName = "singleSpace", error = "A single space character is not allowed.") => (control) => {
    return regexpValidation(control, { regExp: singleSpace, error, errorName });
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
export const spaceRestrictionValidator = (errorName = "spaceRestriction", error = "Value can not start or end with a space character.") => (control) => {
    return regexpValidation(control, {
        regExp: spaceRestriction,
        error,
        errorName,
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
export const ssnValidator = (errorName = "ssn", error = "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.") => (control) => {
    return regexpValidation(control, { regExp: ssn, error, errorName });
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
export const timeHH_MM_12Validator = (errorName = "timeHH_MM_12", error = "Please input a value in a HH:MM 12-hour format.") => (control) => {
    return regexpValidation(control, {
        regExp: timeHH_MM_12,
        error,
        errorName,
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
export const timeHH_MM_24Validator = (errorName = "timeHH_MM_24", error = "Please input a value in a HH:MM 24-hour format.") => (control) => {
    return regexpValidation(control, {
        regExp: timeHH_MM_24,
        error,
        errorName,
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
export const timeHH_MM_SS_24Validator = (errorName = "timeHH_MM_SS_24", error = "Please input a value in a HH:MM:SS 24-hour format.") => (control) => {
    return regexpValidation(control, {
        regExp: timeHH_MM_SS_24,
        error,
        errorName,
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
export const urlValidator = (errorName = "url", error = "Improper URL format.") => (control) => {
    return regexpValidation(control, { regExp: url, error, errorName });
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
export const zipCodeValidator = (errorName = "zipCode", error = "Improper zip code format.") => (control) => {
    return regexpValidation(control, { regExp: zipCode, error, errorName });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3JlYWN0aXZlLWZvcm1zL3ByZWJ1aWx0LXZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBR0gsT0FBTyxFQUNMLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLE9BQU8sRUFDUCxjQUFjLEVBQ2QsY0FBYyxFQUNkLEtBQUssRUFDTCxXQUFXLEVBQ1gsU0FBUyxFQUNULFdBQVcsRUFDWCxRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLEdBQUcsRUFDSCxZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixHQUFHLEVBQ0gsT0FBTyxHQUNSLE1BQU0sbUJBQW1CLENBQUM7QUFDM0IsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFOUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUMzQixDQUNFLFlBQW9CLFNBQVMsRUFDN0IsUUFBZ0IsdUZBQXVGLEVBQzFGLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUMxRSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FDaEMsQ0FDRSxZQUFvQixjQUFjLEVBQ2xDLFFBQWdCLHlDQUF5QyxFQUM1QyxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFB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QUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDL0IsTUFBTSxFQUFFLFlBQVk7UUFDcEIsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FDbkMsQ0FDRSxZQUFvQixpQkFBaUIsRUFDckMsUUFBZ0Isb0RBQW9ELEVBQ3ZELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxlQUFlO1FBQ3ZCLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUN2QixDQUNFLFlBQW9CLEtBQUssRUFDekIsUUFBZ0Isc0JBQXNCLEVBQ3pCLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FDM0IsQ0FDRSxZQUFvQixTQUFTLEVBQzdCLFFBQWdCLDJCQUEyQixFQUM5QixFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDMUUsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBJU0Mtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xyXG4gKi9cclxuXHJcbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHtcclxuICBJUEFkZHJlc3NWNCxcclxuICBJUEFkZHJlc3NWNEFuZFY2LFxyXG4gIElQQWRkcmVzc1Y2LFxyXG4gIGFkZHJlc3MsXHJcbiAgZGF0ZUREX01NX1lZWVksXHJcbiAgZGF0ZVlZWVlfTU1fREQsXHJcbiAgZW1haWwsXHJcbiAgbGV0dGVyc09ubHksXHJcbiAgbm9TcGVjaWFsLFxyXG4gIG51bWJlcnNPbmx5LFxyXG4gIHBhc3Nwb3J0LFxyXG4gIHBhc3N3b3JkU3RyZW5ndGgsXHJcbiAgcGhvbmVOdW1iZXIsXHJcbiAgc2luZ2xlU3BhY2UsXHJcbiAgc3BhY2VSZXN0cmljdGlvbixcclxuICBzc24sXHJcbiAgdGltZUhIX01NXzEyLFxyXG4gIHRpbWVISF9NTV8yNCxcclxuICB0aW1lSEhfTU1fU1NfMjQsXHJcbiAgdXJsLFxyXG4gIHppcENvZGUsXHJcbn0gZnJvbSBcIi4uL2NvbnN0YW50L3JlZ2V4XCI7XHJcbmltcG9ydCB7IHJlZ2V4cFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnNcIjtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBwcm9wZXIgYWRkcmVzcyBmb3JtYXRcclxuICogKFN0cmVldCBudW1iZXIgU3RyZWV0IE5hbWUsIENpdHksIFN0YXRlIFpJUCBjb2RlKVxyXG4gKiBFeGFtcGxlOiAzMzQ0IFcgQWxhbWVkYSBBdmVudWUsIExha2V3b29kLCBDTyA4MDIyMlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWRkcmVzc1ZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImFkZHJlc3NcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0IG9mOiBTdHJlZXQgbnVtYmVyIFN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSBaSVAgY29kZS5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgcmVnRXhwOiBhZGRyZXNzLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGNvbnNpc3RzIG9mIG9ubHlcclxuICogYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxwaGFiZXRPbmx5VmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiYWxwaGFiZXRPbmx5XCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJPbmx5IGFscGhhYmV0aWMgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgcmVnRXhwOiBsZXR0ZXJzT25seSwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXHJcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZLCBkZC5NTS5ZWVlZIG9yIGRkL01NL1lZWVkuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBkYXRlRERfTU1fWVlZWVZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImRhdGVERF9NTV9ZWVlZXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZIG9yIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBkYXRlRERfTU1fWVlZWSxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogWVlZWS1NTS1kZC5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRhdGVZWVlZX01NX0REVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiZGF0ZVlZWVlfTU1fRERcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBZWVlZLU1NLWRkLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IGRhdGVZWVlZX01NX0RELFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbWFpbFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImVtYWlsXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogbG9jYWwtcGFydEBkb21haW4uY29tLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHA6IGVtYWlsLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IHgueC54Lnggb3IgeTp5Onk6eTp5Onk6eTp5LlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXBBZGRyZXNzVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiaXBBZGRyZXNzXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBJUEFkZHJlc3NWNEFuZFY2LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiB4LngueC54LlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaVB2NFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlQdjRcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB4LngueC54LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHA6IElQQWRkcmVzc1Y0LCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogeTp5Onk6eTp5Onk6eTp5LlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaVB2NlZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlQdjZcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB5Onk6eTp5Onk6eTp5OnkuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7IHJlZ0V4cDogSVBBZGRyZXNzVjYsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgY29uc2lzdHMgb2Ygb25seVxyXG4gKiBudW1lcmljIGNoYXJhY3RlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBudW1lcmljc09ubHlWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJudW1lcmljc09ubHlcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIk9ubHkgbnVtZXJpYyBjaGFyYWN0ZXJzIGFyZSBhbGxvd2VkLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHA6IG51bWJlcnNPbmx5LCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm9TcGVjaWFsc1ZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcIm5vU3BlY2lhbHNcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIk5vIHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgcmVnRXhwOiBub1NwZWNpYWwsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBwcm9wZXIgcGFzc3BvcnQgZm9ybWF0XHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXNzcG9ydFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInBhc3Nwb3J0XCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJJbmNvcnJlY3QgcGFzc3BvcnQgZm9ybWF0LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHA6IHBhc3Nwb3J0LCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgc3Ryb25nIHBhc3N3b3JkIGZvcm1hdFxyXG4gKiAoSGFzIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLCAxIG51bWJlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzXHJcbiAqIGxlbmd0aCBvZiBhdCBsZWFzdCA4IGNoYXJhY3RlcnMpLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGFzc3dvcmRWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJwYXNzd29yZFwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiVGhlIHZhbHVlIGhhcyB0byBjb250YWluIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLCAxIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBoYXMgYSBsZW5ndGggb2YgOC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBwYXNzd29yZFN0cmVuZ3RoLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiAoMDAwKSAwMDAgMDAwMC5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBob25lTnVtYmVyVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwicGhvbmVOdW1iZXJcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiAoMDAwKSAwMDAgMDAwMC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgcmVnRXhwOiBwaG9uZU51bWJlciwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBjb25zaXN0cyBvZiBhIHNpbmdsZSBzcGFjZVxyXG4gKiBjaGFyYWN0ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBzaW5nbGVTcGFjZVZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNpbmdsZVNwYWNlXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJBIHNpbmdsZSBzcGFjZSBjaGFyYWN0ZXIgaXMgbm90IGFsbG93ZWQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7IHJlZ0V4cDogc2luZ2xlU3BhY2UsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgc3RhcnRzIG9yIGVuZHMgd2l0aCBhXHJcbiAqIHNwYWNlIGNoYXJhY3Rlci5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNwYWNlUmVzdHJpY3Rpb25WYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJzcGFjZVJlc3RyaWN0aW9uXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJWYWx1ZSBjYW4gbm90IHN0YXJ0IG9yIGVuZCB3aXRoIGEgc3BhY2UgY2hhcmFjdGVyLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IHNwYWNlUmVzdHJpY3Rpb24sXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXHJcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiBBQUEtR0dHLVNTU1Mgb3IgQUFBR0dHU1NTUy5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNzblZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNzblwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogQUFBLUdHRy1TU1NTIG9yIEFBQUdHR1NTU1MuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7IHJlZ0V4cDogc3NuLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGFcclxuICogVGltZSBGb3JtYXQgSEg6TU0gMTItaG91ciB3aXRoIG9wdGlvbmFsIGxlYWRpbmcgMC5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRpbWVISF9NTV8xMlZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInRpbWVISF9NTV8xMlwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTSAxMi1ob3VyIGZvcm1hdC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiB0aW1lSEhfTU1fMTIsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIFRpbWUgRm9ybWF0IEhIOk1NIDI0LWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aW1lSEhfTU1fMjRWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJ0aW1lSEhfTU1fMjRcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU0gMjQtaG91ciBmb3JtYXQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogdGltZUhIX01NXzI0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxyXG4gKiBUaW1lIEZvcm1hdCBISDpNTTpTUyAyNC1ob3VyLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGltZUhIX01NX1NTXzI0VmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwidGltZUhIX01NX1NTXzI0XCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NOlNTIDI0LWhvdXIgZm9ybWF0LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IHRpbWVISF9NTV9TU18yNCxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGFcclxuICogY29ycmVjdCB1cmwgZm9ybWF0LlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdXJsVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwidXJsXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJJbXByb3BlciBVUkwgZm9ybWF0LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHA6IHVybCwgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXHJcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiAwMDAwMCBvciAwMDAwMC0wMDAwLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgemlwQ29kZVZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInppcENvZGVcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIkltcHJvcGVyIHppcCBjb2RlIGZvcm1hdC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgcmVnRXhwOiB6aXBDb2RlLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcbiJdfQ==