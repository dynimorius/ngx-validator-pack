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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcHJlYnVpbHQtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxjQUFjLEVBQ2QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLEtBQUssRUFDTCxnQkFBZ0IsRUFDaEIsR0FBRyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLEdBQUcsRUFDSCxPQUFPLEdBQ1IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVqRTs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQzNCLENBQ0UsWUFBb0IsU0FBUyxFQUM3QixRQUFnQix1RkFBdUYsRUFDMUYsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDL0IsTUFBTSxFQUFFLE9BQU87UUFDZixLQUFLO1FBQ0wsU0FBUztRQUNULEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBQ2hDLENBQ0UsWUFBb0IsY0FBYyxFQUNsQyxRQUFnQix5Q0FBeUMsRUFDNUMsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxn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QWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxHQUFHO1FBQ1gsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLLEVBQUUsR0FBRztLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLGdCQUFnQixHQUMzQixDQUNFLFlBQW9CLFNBQVMsRUFDN0IsUUFBZ0IsMkJBQTJCLEVBQzlCLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxPQUFPO1FBQ2YsS0FBSztRQUNMLFNBQVM7UUFDVCxLQUFLLEVBQUUsR0FBRztLQUNYLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgSVBBZGRyZXNzVjQsXHJcbiAgSVBBZGRyZXNzVjRBbmRWNixcclxuICBJUEFkZHJlc3NWNixcclxuICBhZGRyZXNzLFxyXG4gIGRhdGVERF9NTV9ZWVlZLFxyXG4gIGRhdGVZWVlZX01NX0RELFxyXG4gIGVtYWlsLFxyXG4gIGxldHRlcnNPbmx5LFxyXG4gIG5vU3BlY2lhbCxcclxuICBudW1iZXJzT25seSxcclxuICBwYXNzcG9ydCxcclxuICBwYXNzd29yZFN0cmVuZ3RoLFxyXG4gIHBob25lTnVtYmVyLFxyXG4gIHNwYWNlLFxyXG4gIHNwYWNlUmVzdHJpY3Rpb24sXHJcbiAgc3NuLFxyXG4gIHRpbWVISF9NTV8xMixcclxuICB0aW1lSEhfTU1fMjQsXHJcbiAgdGltZUhIX01NX1NTXzI0LFxyXG4gIHVybCxcclxuICB6aXBDb2RlLFxyXG59IGZyb20gXCIuLi8uLi9jb25zdGFudC9yZWdleFwiO1xyXG5pbXBvcnQgeyByZWdleHBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zXCI7XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgcHJvcGVyIGFkZHJlc3MgZm9ybWF0XHJcbiAqIChTdHJlZXQgbnVtYmVyIFN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSBaSVAgY29kZSlcclxuICogRXhhbXBsZTogMzM0NCBXIEFsYW1lZGEgQXZlbnVlLCBMYWtld29vZCwgQ08gODAyMjJcclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJhZGRyZXNzXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdCBvZjogU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogYWRkcmVzcyxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgICAgbG9naWM6IFwiISFcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGNvbnNpc3RzIG9mIG9ubHlcclxuICogYWxwaGFiZXRpYyBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxwaGFiZXRPbmx5VmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiYWxwaGFiZXRPbmx5XCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJPbmx5IGFscGhhYmV0aWMgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBsZXR0ZXJzT25seSxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgICAgbG9naWM6IFwiISFcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IGRkLU1NLVlZWVksIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRhdGVERF9NTV9ZWVlZVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiZGF0ZUREX01NX1lZWVlcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6IGRkLU1NLVlZWVkgb3IgZGQuTU0uWVlZWSBvciBkZC9NTS9ZWVlZLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IGRhdGVERF9NTV9ZWVlZLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgICBsb2dpYzogXCIhIVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBZWVlZLU1NLWRkLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGF0ZVlZWVlfTU1fRERWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJkYXRlWVlZWV9NTV9ERFwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IFlZWVktTU0tZGQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogZGF0ZVlZWVlfTU1fREQsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6XHJcbiAqIGxvY2FsLXBhcnRAZG9tYWluLmNvbS5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGVtYWlsVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiZW1haWxcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogZW1haWwsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXHJcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlwQWRkcmVzc1ZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlwQWRkcmVzc1wiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgb25lIG9mIHRoZSBmb2xsb3dpbmcgZm9ybWF0czogeC54LngueCBvciB5Onk6eTp5Onk6eTp5OnkuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogSVBBZGRyZXNzVjRBbmRWNixcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgICAgbG9naWM6IFwiISFcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogeC54LngueC5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGlQdjRWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJpUHY0XCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogeC54LngueC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBJUEFkZHJlc3NWNCxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgICAgbG9naWM6IFwiISFcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogeTp5Onk6eTp5Onk6eTp5LlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaVB2NlZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlQdjZcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB5Onk6eTp5Onk6eTp5OnkuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogSVBBZGRyZXNzVjYsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBjb25zaXN0cyBvZiBvbmx5XHJcbiAqIG51bWVyaWMgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG51bWVyaWNzT25seVZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcIm51bWVyaWNzT25seVwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiT25seSBudW1lcmljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogbnVtYmVyc09ubHksXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBoYXMgYW55IHNwZWNpYWwgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vU3BlY2lhbHNWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJub1NwZWNpYWxzXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJObyBzcGVjaWFsIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogbm9TcGVjaWFsLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgICBsb2dpYzogXCIhIVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBwcm9wZXIgcGFzc3BvcnQgZm9ybWF0XHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXNzcG9ydFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInBhc3Nwb3J0XCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJJbmNvcnJlY3QgcGFzc3BvcnQgZm9ybWF0LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IHBhc3Nwb3J0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgICBsb2dpYzogXCIhIVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBzdHJvbmcgcGFzc3dvcmQgZm9ybWF0XHJcbiAqIChIYXMgYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIDEgbnVtYmVyLCAxIHNwZWNpYWwgY2hhcmFjdGVyIGFuZCBoYXNcclxuICogbGVuZ3RoIG9mIGF0IGxlYXN0IDggY2hhcmFjdGVycykuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXNzd29yZFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInBhc3N3b3JkXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJUaGUgdmFsdWUgaGFzIHRvIGNvbnRhaW4gYXQgbGVhc3QgMSBsb3dlcmNhc2UgbGV0dGVyLCAxIHVwcGVyY2FzZSBsZXR0ZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhcyBhIGxlbmd0aCBvZiA4LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IHBhc3N3b3JkU3RyZW5ndGgsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIGZvbGxvd2luZyBmb3JtYXQ6XHJcbiAqICgwMDApIDAwMCAwMDAwLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGhvbmVOdW1iZXJWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJwaG9uZU51bWJlclwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6ICgwMDApIDAwMCAwMDAwLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IHBob25lTnVtYmVyLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgICBsb2dpYzogXCIhIVwiLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgY29uc2lzdHMgb2YgYSBzaW5nbGUgc3BhY2VcclxuICogY2hhcmFjdGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJzcGFjZVwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiU3BhY2UgY2hhcmFjdGVyIGlzIG5vdCBhbGxvd2VkLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IHNwYWNlLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgICBsb2dpYzogXCIhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBzdGFydHMgb3IgZW5kcyB3aXRoIGFcclxuICogc3BhY2UgY2hhcmFjdGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VSZXN0cmljdGlvblZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNwYWNlUmVzdHJpY3Rpb25cIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlZhbHVlIGNhbiBub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBzcGFjZSBjaGFyYWN0ZXIuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogc3BhY2VSZXN0cmljdGlvbixcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgICAgbG9naWM6IFwiISFcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3NuVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwic3NuXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBBQUEtR0dHLVNTU1Mgb3IgQUFBR0dHU1NTUy5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBzc24sXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICAgIGxvZ2ljOiBcIiEhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIFRpbWUgRm9ybWF0IEhIOk1NIDEyLWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aW1lSEhfTU1fMTJWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJ0aW1lSEhfTU1fMTJcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU0gMTItaG91ciBmb3JtYXQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogdGltZUhIX01NXzEyLFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgICBsb2dpYzogXCIhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIFRpbWUgRm9ybWF0IEhIOk1NIDI0LWhvdXIgd2l0aCBvcHRpb25hbCBsZWFkaW5nIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aW1lSEhfTU1fMjRWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJ0aW1lSEhfTU1fMjRcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU0gMjQtaG91ciBmb3JtYXQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogdGltZUhIX01NXzI0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgICBsb2dpYzogXCIhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIFRpbWUgRm9ybWF0IEhIOk1NOlNTIDI0LWhvdXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aW1lSEhfTU1fU1NfMjRWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJ0aW1lSEhfTU1fU1NfMjRcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU06U1MgMjQtaG91ciBmb3JtYXQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogdGltZUhIX01NX1NTXzI0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgICBsb2dpYzogXCIhXCIsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIGNvcnJlY3QgdXJsIGZvcm1hdC5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVybFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInVybFwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiSW1wcm9wZXIgVVJMIGZvcm1hdC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiB1cmwsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICAgIGxvZ2ljOiBcIiFcIixcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IDAwMDAwIG9yIDAwMDAwLTAwMDAuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB6aXBDb2RlVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiemlwQ29kZVwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiSW1wcm9wZXIgemlwIGNvZGUgZm9ybWF0LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IHppcENvZGUsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICAgIGxvZ2ljOiBcIiFcIixcclxuICAgIH0pO1xyXG4gIH07XHJcbiJdfQ==