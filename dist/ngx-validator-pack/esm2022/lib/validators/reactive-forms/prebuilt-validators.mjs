/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { IPAddressV4, IPAddressV4AndV6, IPAddressV6, address, dateDD_MM_YYYY, dateYYYY_MM_DD, email, lettersOnly, noSpecial, numbersOnly, passport, passwordStrength, phoneNumber, space, spaceRestriction, ssn, timeHH_MM_12, timeHH_MM_24, timeHH_MM_SS_24, url, zipCode, } from "../../constant/regex";
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
export const addressValidator = (errorName = "address", error = "Please input a value in a format of: Street number Street Name, City, State ZIP code.") => (control) => {
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
export const alphabetOnlyValidator = (errorName = "alphabetOnly", error = "Only alphabetic characters are allowed.") => (control) => {
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
export const dateDD_MM_YYYYValidator = (errorName = "dateDD_MM_YYYY", error = "Please input a value one of the following formats: dd-MM-YYYY or dd.MM.YYYY or dd/MM/YYYY.") => (control) => {
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
export const dateYYYY_MM_DDValidator = (errorName = "dateYYYY_MM_DD", error = "Please input a value in a format: YYYY-MM-dd.") => (control) => {
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
export const emailValidator = (errorName = "email", error = "Please input a value in a format: local-part@domain.com.") => (control) => {
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
export const ipAddressValidator = (errorName = "ipAddress", error = "Please input a value one of the following formats: x.x.x.x or y:y:y:y:y:y:y:y.") => (control) => {
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
export const iPv4Validator = (errorName = "iPv4", error = "Please input a value in a format: x.x.x.x.") => (control) => {
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
export const iPv6Validator = (errorName = "iPv6", error = "Please input a value in a format: y:y:y:y:y:y:y:y.") => (control) => {
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
export const numericsOnlyValidator = (errorName = "numericsOnly", error = "Only numeric characters are allowed.") => (control) => {
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
export const noSpecialsValidator = (errorName = "noSpecials", error = "No special characters are allowed.") => (control) => {
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
export const passportValidator = (errorName = "passport", error = "Incorrect passport format.") => (control) => {
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
export const passwordValidator = (errorName = "password", error = "The value has to contain at least 1 lowercase letter, 1 uppercase letter, 1 special character and has a length of 8.") => (control) => {
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
export const phoneNumberValidator = (errorName = "phoneNumber", error = "Please input a value in a format: (000) 000 0000.") => (control) => {
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
export const spaceValidator = (errorName = "space", error = "Space character is not allowed.") => (control) => {
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
export const spaceRestrictionValidator = (errorName = "spaceRestriction", error = "Value can not start or end with a space character.") => (control) => {
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
export const ssnValidator = (errorName = "ssn", error = "Please input a value one of the following formats: AAA-GGG-SSSS or AAAGGGSSSS.") => (control) => {
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
export const timeHH_MM_12Validator = (errorName = "timeHH_MM_12", error = "Please input a value in a HH:MM 12-hour format.") => (control) => {
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
export const timeHH_MM_24Validator = (errorName = "timeHH_MM_24", error = "Please input a value in a HH:MM 24-hour format.") => (control) => {
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
export const timeHH_MM_SS_24Validator = (errorName = "timeHH_MM_SS_24", error = "Please input a value in a HH:MM:SS 24-hour format.") => (control) => {
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
export const urlValidator = (errorName = "url", error = "Improper URL format.") => (control) => {
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
export const zipCodeValidator = (errorName = "zipCode", error = "Improper zip code format.") => (control) => {
    return regexpValidation(control, {
        regExp: zipCode,
        error,
        errorName,
        logic: "!",
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcHJlYnVpbHQtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxjQUFjLEVBQ2QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLEtBQUssRUFDTCxnQkFBZ0IsRUFDaEIsR0FBRyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLEdBQUcsRUFDSCxPQUFPLEdBQ1IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVqRTs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQzNCLENBQ0UsWUFBb0IsU0FBUyxFQUM3QixRQUFnQix1RkFBdUYsRUFDMUYsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDL0IsTUFBTSxFQUFFLE9BQU87UUFDZixLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQ2hDLENBQ0UsWUFBb0IsY0FBYyxFQUNsQyxRQUFnQix5Q0FBeUMsRUFDNUMsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxn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QWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLLEVBQUUsR0FBRztLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUMzQixDQUNFLFlBQW9CLFNBQVMsRUFDN0IsUUFBZ0IsMkJBQTJCLEVBQzlCLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxPQUFPO1FBQ2YsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLLEVBQUUsR0FBRztLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBTbGF2a28gTWloYWpsb3ZpYyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIElTQy1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBhdCBodHRwczovL3d3dy5pc2Mub3JnL2xpY2Vuc2VzL1xuICovXG5cbmltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7XG4gIElQQWRkcmVzc1Y0LFxuICBJUEFkZHJlc3NWNEFuZFY2LFxuICBJUEFkZHJlc3NWNixcbiAgYWRkcmVzcyxcbiAgZGF0ZUREX01NX1lZWVksXG4gIGRhdGVZWVlZX01NX0RELFxuICBlbWFpbCxcbiAgbGV0dGVyc09ubHksXG4gIG5vU3BlY2lhbCxcbiAgbnVtYmVyc09ubHksXG4gIHBhc3Nwb3J0LFxuICBwYXNzd29yZFN0cmVuZ3RoLFxuICBwaG9uZU51bWJlcixcbiAgc3BhY2UsXG4gIHNwYWNlUmVzdHJpY3Rpb24sXG4gIHNzbixcbiAgdGltZUhIX01NXzEyLFxuICB0aW1lSEhfTU1fMjQsXG4gIHRpbWVISF9NTV9TU18yNCxcbiAgdXJsLFxuICB6aXBDb2RlLFxufSBmcm9tIFwiLi4vLi4vY29uc3RhbnQvcmVnZXhcIjtcbmltcG9ydCB7IHJlZ2V4cFZhbGlkYXRpb24gfSBmcm9tIFwiLi4vLi4vdmFsaWRhdGlvbnMvdmFsaWRhdGlvbnNcIjtcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIHByb3BlciBhZGRyZXNzIGZvcm1hdFxuICogKFN0cmVldCBudW1iZXIgU3RyZWV0IE5hbWUsIENpdHksIFN0YXRlIFpJUCBjb2RlKVxuICogRXhhbXBsZTogMzM0NCBXIEFsYW1lZGEgQXZlbnVlLCBMYWtld29vZCwgQ08gODAyMjJcbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPVxuICAoXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImFkZHJlc3NcIixcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdCBvZjogU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUuXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IGFkZHJlc3MsXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgY29uc2lzdHMgb2Ygb25seVxuICogYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLlxuICpcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgYWxwaGFiZXRPbmx5VmFsaWRhdG9yID1cbiAgKFxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJhbHBoYWJldE9ubHlcIixcbiAgICBlcnJvcjogc3RyaW5nID0gXCJPbmx5IGFscGhhYmV0aWMgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcbiAgICAgIHJlZ0V4cDogbGV0dGVyc09ubHksXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gb25lIG9mIHRoZVxuICogZm9sbG93aW5nIGZvcm1hdHM6IGRkLU1NLVlZWVksIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGRhdGVERF9NTV9ZWVlZVmFsaWRhdG9yID1cbiAgKFxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJkYXRlRERfTU1fWVlZWVwiLFxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IGRkLU1NLVlZWVkgb3IgZGQuTU0uWVlZWSBvciBkZC9NTS9ZWVlZLlwiXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xuICAgICAgcmVnRXhwOiBkYXRlRERfTU1fWVlZWSxcbiAgICAgIGVycm9yLFxuICAgICAgZXJyb3JOYW1lLFxuICAgICAgbG9naWM6IFwiISFcIixcbiAgICB9KTtcbiAgfTtcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6XG4gKiBZWVlZLU1NLWRkLlxuICpcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgZGF0ZVlZWVlfTU1fRERWYWxpZGF0b3IgPVxuICAoXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImRhdGVZWVlZX01NX0REXCIsXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IFlZWVktTU0tZGQuXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IGRhdGVZWVlZX01NX0RELFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhIVwiLFxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcbiAqIGxvY2FsLXBhcnRAZG9tYWluLmNvbS5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWRhdG9yID1cbiAgKFxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJlbWFpbFwiLFxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IGVtYWlsLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhIVwiLFxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGlwQWRkcmVzc1ZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiaXBBZGRyZXNzXCIsXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogeC54LngueCBvciB5Onk6eTp5Onk6eTp5OnkuXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IElQQWRkcmVzc1Y0QW5kVjYsXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxuICogeC54LngueC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IGlQdjRWYWxpZGF0b3IgPVxuICAoXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlQdjRcIixcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogeC54LngueC5cIlxuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcbiAgICAgIHJlZ0V4cDogSVBBZGRyZXNzVjQsXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxuICogeTp5Onk6eTp5Onk6eTp5LlxuICpcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgaVB2NlZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiaVB2NlwiLFxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB5Onk6eTp5Onk6eTp5OnkuXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IElQQWRkcmVzc1Y2LFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhIVwiLFxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGNvbnNpc3RzIG9mIG9ubHlcbiAqIG51bWVyaWMgY2hhcmFjdGVycy5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IG51bWVyaWNzT25seVZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwibnVtZXJpY3NPbmx5XCIsXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiT25seSBudW1lcmljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IG51bWJlcnNPbmx5LFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhIVwiLFxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLlxuICpcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3Qgbm9TcGVjaWFsc1ZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwibm9TcGVjaWFsc1wiLFxuICAgIGVycm9yOiBzdHJpbmcgPSBcIk5vIHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcbiAgICAgIHJlZ0V4cDogbm9TcGVjaWFsLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhIVwiLFxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgcHJvcGVyIHBhc3Nwb3J0IGZvcm1hdFxuICpcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgcGFzc3BvcnRWYWxpZGF0b3IgPVxuICAoXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInBhc3Nwb3J0XCIsXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiSW5jb3JyZWN0IHBhc3Nwb3J0IGZvcm1hdC5cIlxuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcbiAgICAgIHJlZ0V4cDogcGFzc3BvcnQsXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBzdHJvbmcgcGFzc3dvcmQgZm9ybWF0XG4gKiAoSGFzIGF0IGxlYXN0IDEgbG93ZXJjYXNlIGxldHRlciwgMSB1cHBlcmNhc2UgbGV0dGVyLCAxIG51bWJlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzXG4gKiBsZW5ndGggb2YgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzKS5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVmFsaWRhdG9yID1cbiAgKFxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJwYXNzd29yZFwiLFxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlRoZSB2YWx1ZSBoYXMgdG8gY29udGFpbiBhdCBsZWFzdCAxIGxvd2VyY2FzZSBsZXR0ZXIsIDEgdXBwZXJjYXNlIGxldHRlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzIGEgbGVuZ3RoIG9mIDguXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IHBhc3N3b3JkU3RyZW5ndGgsXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxuICogKDAwMCkgMDAwIDAwMDAuXG4gKlxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlclZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwicGhvbmVOdW1iZXJcIixcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogKDAwMCkgMDAwIDAwMDAuXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IHBob25lTnVtYmVyLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhIVwiLFxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXNjcmlwdGlvblxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGNvbnNpc3RzIG9mIGEgc2luZ2xlIHNwYWNlXG4gKiBjaGFyYWN0ZXIuXG4gKlxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZVZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwic3BhY2VcIixcbiAgICBlcnJvcjogc3RyaW5nID0gXCJTcGFjZSBjaGFyYWN0ZXIgaXMgbm90IGFsbG93ZWQuXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IHNwYWNlLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgc3RhcnRzIG9yIGVuZHMgd2l0aCBhXG4gKiBzcGFjZSBjaGFyYWN0ZXIuXG4gKlxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZVJlc3RyaWN0aW9uVmFsaWRhdG9yID1cbiAgKFxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJzcGFjZVJlc3RyaWN0aW9uXCIsXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiVmFsdWUgY2FuIG5vdCBzdGFydCBvciBlbmQgd2l0aCBhIHNwYWNlIGNoYXJhY3Rlci5cIlxuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcbiAgICAgIHJlZ0V4cDogc3BhY2VSZXN0cmljdGlvbixcbiAgICAgIGVycm9yLFxuICAgICAgZXJyb3JOYW1lLFxuICAgICAgbG9naWM6IFwiISFcIixcbiAgICB9KTtcbiAgfTtcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXG4gKiBmb2xsb3dpbmcgZm9ybWF0czogQUFBLUdHRy1TU1NTIG9yIEFBQUdHR1NTU1MuXG4gKlxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXG4gKi9cbmV4cG9ydCBjb25zdCBzc25WYWxpZGF0b3IgPVxuICAoXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNzblwiLFxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlwiXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xuICAgICAgcmVnRXhwOiBzc24sXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxuICogVGltZSBGb3JtYXQgSEg6TU0gMTItaG91ciB3aXRoIG9wdGlvbmFsIGxlYWRpbmcgMC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHRpbWVISF9NTV8xMlZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwidGltZUhIX01NXzEyXCIsXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTSAxMi1ob3VyIGZvcm1hdC5cIlxuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcbiAgICAgIHJlZ0V4cDogdGltZUhIX01NXzEyLFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxuICogVGltZSBGb3JtYXQgSEg6TU0gMjQtaG91ciB3aXRoIG9wdGlvbmFsIGxlYWRpbmcgMC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHRpbWVISF9NTV8yNFZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwidGltZUhIX01NXzI0XCIsXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTSAyNC1ob3VyIGZvcm1hdC5cIlxuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcbiAgICAgIHJlZ0V4cDogdGltZUhIX01NXzI0LFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxuICogVGltZSBGb3JtYXQgSEg6TU06U1MgMjQtaG91ci5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHRpbWVISF9NTV9TU18yNFZhbGlkYXRvciA9XG4gIChcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwidGltZUhIX01NX1NTXzI0XCIsXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTTpTUyAyNC1ob3VyIGZvcm1hdC5cIlxuICApOiBWYWxpZGF0b3JGbiA9PlxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcbiAgICAgIHJlZ0V4cDogdGltZUhIX01NX1NTXzI0LFxuICAgICAgZXJyb3IsXG4gICAgICBlcnJvck5hbWUsXG4gICAgICBsb2dpYzogXCIhXCIsXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogQHB1YmxpY0FwaVxuICogQGRlc2NyaXB0aW9uXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxuICogY29ycmVjdCB1cmwgZm9ybWF0LlxuICpcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxuICovXG5leHBvcnQgY29uc3QgdXJsVmFsaWRhdG9yID1cbiAgKFxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJ1cmxcIixcbiAgICBlcnJvcjogc3RyaW5nID0gXCJJbXByb3BlciBVUkwgZm9ybWF0LlwiXG4gICk6IFZhbGlkYXRvckZuID0+XG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xuICAgICAgcmVnRXhwOiB1cmwsXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiFcIixcbiAgICB9KTtcbiAgfTtcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVzY3JpcHRpb25cbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXG4gKiBmb2xsb3dpbmcgZm9ybWF0czogMDAwMDAgb3IgMDAwMDAtMDAwMC5cbiAqXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcbiAqL1xuZXhwb3J0IGNvbnN0IHppcENvZGVWYWxpZGF0b3IgPVxuICAoXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInppcENvZGVcIixcbiAgICBlcnJvcjogc3RyaW5nID0gXCJJbXByb3BlciB6aXAgY29kZSBmb3JtYXQuXCJcbiAgKTogVmFsaWRhdG9yRm4gPT5cbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XG4gICAgICByZWdFeHA6IHppcENvZGUsXG4gICAgICBlcnJvcixcbiAgICAgIGVycm9yTmFtZSxcbiAgICAgIGxvZ2ljOiBcIiFcIixcbiAgICB9KTtcbiAgfTtcbiJdfQ==