/**
 * @license
 * Copyright Slavko Mihajlovic All Rights Reserved.
 *
 * Use of this source code is governed by an ISC-style license that can be
 * found at https://www.isc.org/licenses/
 */
import { IPAddressV4, IPAddressV4AndV6, IPAddressV6, address, dateDD_MM_YYYY, dateYYYY_MM_DD, email, lettersOnly, noSpecial, numbersOnly, passport, passwordStrength, phoneNumber, singleSpace, spaceRestriction, ssn, timeHH_MM_12, timeHH_MM_24, timeHH_MM_SS_24, url, zipCode, } from "../../constant/regex";
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
    return regexpValidation(control, {
        regExp: lettersOnly,
        error,
        errorName,
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
    return regexpValidation(control, {
        regExp: IPAddressV4,
        error,
        errorName,
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
export const singleSpaceValidator = (errorName = "singleSpace", error = "A single space character is not allowed.") => (control) => {
    return regexpValidation(control, {
        regExp: singleSpace,
        error,
        errorName,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJlYnVpbHQtdmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC12YWxpZGF0b3ItcGFjay9zcmMvbGliL3ZhbGlkYXRvcnMvcmVhY3RpdmUtZm9ybXMvcHJlYnVpbHQtdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixXQUFXLEVBQ1gsT0FBTyxFQUNQLGNBQWMsRUFDZCxjQUFjLEVBQ2QsS0FBSyxFQUNMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFFBQVEsRUFDUixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsR0FBRyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLEdBQUcsRUFDSCxPQUFPLEdBQ1IsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVqRTs7Ozs7Ozs7OztHQVVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQzNCLENBQ0UsWUFBb0IsU0FBUyxFQUM3QixRQUFnQix1RkFBdUYsRUFDMUYsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzFFLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUNoQyxDQUNFLFlBQW9CLGNBQWMsRUFDbEMsUUFBZ0IseUNBQXlDLEVBQzVDLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxXQUFXO1FBQ25CLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sdUJBQXVCLEdBQ2xDLENBQ0UsWUFBb0IsZ0JBQWdCLEVBQ3BDLFFBQWdCLDRGQUE0RixFQUMvRixFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMvQixNQUFNLEVBQUUsY0FBYztRQUN0QixLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUNsQyxDQUNFLFlBQW9CLGdCQUFnQixFQUNwQyxRQUFnQiwrQ0FBK0MsRUFDbEQsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDL0IsTUFBTSxFQUFFLGNBQWM7UUFDdEIsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQ3pCLENBQ0UsWUFBb0IsT0FBTyxFQUMzQixRQUFnQiwwREFBMEQsRUFDN0QsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQ3hFLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUM3QixDQUNFLFlBQW9CLFdBQVcsRUFDL0IsUUFBZ0IsZ0ZBQWdGLEVBQ25GLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQ3hCLENBQ0UsWUFBb0IsTUFBTSxFQUMxQixRQUFnQiw0Q0FBNEMsRUFDL0MsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDL0IsTUFBTSxFQUFFLFdBQVc7UUFDbkIsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQ3hCLENBQ0UsWUFBb0IsTUFBTSxFQUMxQixRQUFnQixvREFBb0QsRUFDdkQsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDL0IsTUFBTSxFQUFFLFdBQVc7UUFDbkIsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FDaEMsQ0FDRSxZQUFvQixjQUFjLEVBQ2xDLFFBQWdCLHNDQUFzQyxFQUN6QyxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMvQixNQUFNLEVBQUUsV0FBVztRQUNuQixLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVKOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQzlCLENBQ0UsWUFBb0IsWUFBWSxFQUNoQyxRQUFnQixvQ0FBb0MsRUFDdkMsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7UUFDL0IsTUFBTSxFQUFFLFNBQVM7UUFDakIsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUM1QixDQUNFLFlBQW9CLFVBQVUsRUFDOUIsUUFBZ0IsNEJBQTRCLEVBQy9CLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUM1QixDQUNFLFlBQW9CLFVBQVUsRUFDOUIsUUFBZ0Isc0hBQXNILEVBQ3pILEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxnQkFBZ0I7UUFDeEIsS0FBSztRQUNMLFNBQVM7S0FDVixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FDL0IsQ0FDRSxZQUFvQixhQUFhLEVBQ2pDLFFBQWdCLG1EQUFtRCxFQUN0RCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMvQixNQUFNLEVBQUUsV0FBVztRQUNuQixLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUMvQixDQUNFLFlBQW9CLGFBQWEsRUFDakMsUUFBZ0IsMENBQTBDLEVBQzdDLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxXQUFXO1FBQ25CLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQ3BDLENBQ0UsWUFBb0Isa0JBQWtCLEVBQ3RDLFFBQWdCLG9EQUFvRCxFQUN2RCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMvQixNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUN2QixDQUNFLFlBQW9CLEtBQUssRUFDekIsUUFBZ0IsZ0ZBQWdGLEVBQ25GLEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQztBQUN0RSxDQUFDLENBQUM7QUFFSjs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FDaEMsQ0FDRSxZQUFvQixjQUFjLEVBQ2xDLFFBQWdCLGlEQUFpRCxFQUNwRCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMvQixNQUFNLEVBQUUsWUFBWTtRQUNwQixLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUNoQyxDQUNFLFlBQW9CLGNBQWMsRUFDbEMsUUFBZ0IsaURBQWlELEVBQ3BELEVBQUUsQ0FDakIsQ0FBQyxPQUF3QixFQUEyQixFQUFFO0lBQ3BELE9BQU8sZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLEtBQUs7UUFDTCxTQUFTO0tBQ1YsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQ25DLENBQ0UsWUFBb0IsaUJBQWlCLEVBQ3JDLFFBQWdCLG9EQUFvRCxFQUN2RCxFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUMvQixNQUFNLEVBQUUsZUFBZTtRQUN2QixLQUFLO1FBQ0wsU0FBUztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVKOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FDdkIsQ0FDRSxZQUFvQixLQUFLLEVBQ3pCLFFBQWdCLHNCQUFzQixFQUN6QixFQUFFLENBQ2pCLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtJQUNwRCxPQUFPLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUFDO0FBRUo7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQzNCLENBQ0UsWUFBb0IsU0FBUyxFQUM3QixRQUFnQiwyQkFBMkIsRUFDOUIsRUFBRSxDQUNqQixDQUFDLE9BQXdCLEVBQTJCLEVBQUU7SUFDcEQsT0FBTyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0FBQzFFLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgU2xhdmtvIE1paGFqbG92aWMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gSVNDLXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgYXQgaHR0cHM6Ly93d3cuaXNjLm9yZy9saWNlbnNlcy9cclxuICovXHJcblxyXG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIFZhbGlkYXRpb25FcnJvcnMsIFZhbGlkYXRvckZuIH0gZnJvbSBcIkBhbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7XHJcbiAgSVBBZGRyZXNzVjQsXHJcbiAgSVBBZGRyZXNzVjRBbmRWNixcclxuICBJUEFkZHJlc3NWNixcclxuICBhZGRyZXNzLFxyXG4gIGRhdGVERF9NTV9ZWVlZLFxyXG4gIGRhdGVZWVlZX01NX0RELFxyXG4gIGVtYWlsLFxyXG4gIGxldHRlcnNPbmx5LFxyXG4gIG5vU3BlY2lhbCxcclxuICBudW1iZXJzT25seSxcclxuICBwYXNzcG9ydCxcclxuICBwYXNzd29yZFN0cmVuZ3RoLFxyXG4gIHBob25lTnVtYmVyLFxyXG4gIHNpbmdsZVNwYWNlLFxyXG4gIHNwYWNlUmVzdHJpY3Rpb24sXHJcbiAgc3NuLFxyXG4gIHRpbWVISF9NTV8xMixcclxuICB0aW1lSEhfTU1fMjQsXHJcbiAgdGltZUhIX01NX1NTXzI0LFxyXG4gIHVybCxcclxuICB6aXBDb2RlLFxyXG59IGZyb20gXCIuLi8uLi9jb25zdGFudC9yZWdleFwiO1xyXG5pbXBvcnQgeyByZWdleHBWYWxpZGF0aW9uIH0gZnJvbSBcIi4uLy4uL3ZhbGlkYXRpb25zL3ZhbGlkYXRpb25zXCI7XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgcHJvcGVyIGFkZHJlc3MgZm9ybWF0XHJcbiAqIChTdHJlZXQgbnVtYmVyIFN0cmVldCBOYW1lLCBDaXR5LCBTdGF0ZSBaSVAgY29kZSlcclxuICogRXhhbXBsZTogMzM0NCBXIEFsYW1lZGEgQXZlbnVlLCBMYWtld29vZCwgQ08gODAyMjJcclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJhZGRyZXNzXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdCBvZjogU3RyZWV0IG51bWJlciBTdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUgWklQIGNvZGUuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7IHJlZ0V4cDogYWRkcmVzcywgZXJyb3IsIGVycm9yTmFtZSB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBjb25zaXN0cyBvZiBvbmx5XHJcbiAqIGFscGhhYmV0aWMgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFscGhhYmV0T25seVZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImFscGhhYmV0T25seVwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiT25seSBhbHBoYWJldGljIGNoYXJhY3RlcnMgYXJlIGFsbG93ZWQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogbGV0dGVyc09ubHksXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBvbmUgb2YgdGhlXHJcbiAqIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZLCBkZC5NTS5ZWVlZIG9yIGRkL01NL1lZWVkuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBkYXRlRERfTU1fWVlZWVZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImRhdGVERF9NTV9ZWVlZXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBkZC1NTS1ZWVlZIG9yIGRkLk1NLllZWVkgb3IgZGQvTU0vWVlZWS5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBkYXRlRERfTU1fWVlZWSxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogWVlZWS1NTS1kZC5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRhdGVZWVlZX01NX0REVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiZGF0ZVlZWVlfTU1fRERcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiBZWVlZLU1NLWRkLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IGRhdGVZWVlZX01NX0RELFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiBsb2NhbC1wYXJ0QGRvbWFpbi5jb20uXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBlbWFpbFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImVtYWlsXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogbG9jYWwtcGFydEBkb21haW4uY29tLlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHA6IGVtYWlsLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IHgueC54Lnggb3IgeTp5Onk6eTp5Onk6eTp5LlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaXBBZGRyZXNzVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiaXBBZGRyZXNzXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiB4LngueC54IG9yIHk6eTp5Onk6eTp5Onk6eS5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBJUEFkZHJlc3NWNEFuZFY2LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiB4LngueC54LlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaVB2NFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcImlQdjRcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgZm9ybWF0OiB4LngueC54LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IElQQWRkcmVzc1Y0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYSBmb2xsb3dpbmcgZm9ybWF0OlxyXG4gKiB5Onk6eTp5Onk6eTp5OnkuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBpUHY2VmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiaVB2NlwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBmb3JtYXQ6IHk6eTp5Onk6eTp5Onk6eS5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBJUEFkZHJlc3NWNixcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGNvbnNpc3RzIG9mIG9ubHlcclxuICogbnVtZXJpYyBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbnVtZXJpY3NPbmx5VmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwibnVtZXJpY3NPbmx5XCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJPbmx5IG51bWVyaWMgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBudW1iZXJzT25seSxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGhhcyBhbnkgc3BlY2lhbCBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm9TcGVjaWFsc1ZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcIm5vU3BlY2lhbHNcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIk5vIHNwZWNpYWwgY2hhcmFjdGVycyBhcmUgYWxsb3dlZC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiBub1NwZWNpYWwsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIHByb3BlciBwYXNzcG9ydCBmb3JtYXRcclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhc3Nwb3J0VmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwicGFzc3BvcnRcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIkluY29ycmVjdCBwYXNzcG9ydCBmb3JtYXQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogcGFzc3BvcnQsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhIHN0cm9uZyBwYXNzd29yZCBmb3JtYXRcclxuICogKEhhcyBhdCBsZWFzdCAxIGxvd2VyY2FzZSBsZXR0ZXIsIDEgdXBwZXJjYXNlIGxldHRlciwgMSBudW1iZXIsIDEgc3BlY2lhbCBjaGFyYWN0ZXIgYW5kIGhhc1xyXG4gKiBsZW5ndGggb2YgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzKS5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwicGFzc3dvcmRcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlRoZSB2YWx1ZSBoYXMgdG8gY29udGFpbiBhdCBsZWFzdCAxIGxvd2VyY2FzZSBsZXR0ZXIsIDEgdXBwZXJjYXNlIGxldHRlciwgMSBzcGVjaWFsIGNoYXJhY3RlciBhbmQgaGFzIGEgbGVuZ3RoIG9mIDguXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogcGFzc3dvcmRTdHJlbmd0aCxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGEgZm9sbG93aW5nIGZvcm1hdDpcclxuICogKDAwMCkgMDAwIDAwMDAuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBwaG9uZU51bWJlclZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInBob25lTnVtYmVyXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIGZvcm1hdDogKDAwMCkgMDAwIDAwMDAuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogcGhvbmVOdW1iZXIsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBjb25zaXN0cyBvZiBhIHNpbmdsZSBzcGFjZVxyXG4gKiBjaGFyYWN0ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCBzaW5nbGVTcGFjZVZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNpbmdsZVNwYWNlXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJBIHNpbmdsZSBzcGFjZSBjaGFyYWN0ZXIgaXMgbm90IGFsbG93ZWQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogc2luZ2xlU3BhY2UsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBzdGFydHMgb3IgZW5kcyB3aXRoIGFcclxuICogc3BhY2UgY2hhcmFjdGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VSZXN0cmljdGlvblZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInNwYWNlUmVzdHJpY3Rpb25cIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlZhbHVlIGNhbiBub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBzcGFjZSBjaGFyYWN0ZXIuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogc3BhY2VSZXN0cmljdGlvbixcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IEFBQS1HR0ctU1NTUyBvciBBQUFHR0dTU1NTLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3NuVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwic3NuXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBvbmUgb2YgdGhlIGZvbGxvd2luZyBmb3JtYXRzOiBBQUEtR0dHLVNTU1Mgb3IgQUFBR0dHU1NTUy5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHsgcmVnRXhwOiBzc24sIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxyXG4gKiBUaW1lIEZvcm1hdCBISDpNTSAxMi1ob3VyIHdpdGggb3B0aW9uYWwgbGVhZGluZyAwLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXJyb3JOYW1lICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciBuYW1lXHJcbiAqIEBwYXJhbSBlcnJvciAgICAgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbH0gLSBWYWxpZGF0aW9uIGVycm9yXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdGltZUhIX01NXzEyVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwidGltZUhIX01NXzEyXCIsXHJcbiAgICBlcnJvcjogc3RyaW5nID0gXCJQbGVhc2UgaW5wdXQgYSB2YWx1ZSBpbiBhIEhIOk1NIDEyLWhvdXIgZm9ybWF0LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwge1xyXG4gICAgICByZWdFeHA6IHRpbWVISF9NTV8xMixcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIGVycm9yTmFtZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIGFcclxuICogVGltZSBGb3JtYXQgSEg6TU0gMjQtaG91ciB3aXRoIG9wdGlvbmFsIGxlYWRpbmcgMC5cclxuICpcclxuICogQHBhcmFtIGVycm9yTmFtZSAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgbmFtZVxyXG4gKiBAcGFyYW0gZXJyb3IgICAgICAgICAgICAgICAgICAgICAgIC0gb3B0aW9uYWwgcGFyYW1ldGVyIHJlcHJlc2VudGluZyBlcnJvciB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7VmFsaWRhdGlvbkVycm9ycyB8IG51bGx9IC0gVmFsaWRhdGlvbiBlcnJvclxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRpbWVISF9NTV8yNFZhbGlkYXRvciA9XHJcbiAgKFxyXG4gICAgZXJyb3JOYW1lOiBzdHJpbmcgPSBcInRpbWVISF9NTV8yNFwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiUGxlYXNlIGlucHV0IGEgdmFsdWUgaW4gYSBISDpNTSAyNC1ob3VyIGZvcm1hdC5cIlxyXG4gICk6IFZhbGlkYXRvckZuID0+XHJcbiAgKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgIHJldHVybiByZWdleHBWYWxpZGF0aW9uKGNvbnRyb2wsIHtcclxuICAgICAgcmVnRXhwOiB0aW1lSEhfTU1fMjQsXHJcbiAgICAgIGVycm9yLFxyXG4gICAgICBlcnJvck5hbWUsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuLyoqXHJcbiAqIEBwdWJsaWNBcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENoZWNrcyBpZiBhIHZhbHVlIGluIHRoZSBnaXZlbiBGcm9tQ29udHJvbCAvIEFic3RyYWN0Q29udHJvbCBpcyBpbiBhXHJcbiAqIFRpbWUgRm9ybWF0IEhIOk1NOlNTIDI0LWhvdXIuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB0aW1lSEhfTU1fU1NfMjRWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJ0aW1lSEhfTU1fU1NfMjRcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIlBsZWFzZSBpbnB1dCBhIHZhbHVlIGluIGEgSEg6TU06U1MgMjQtaG91ciBmb3JtYXQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7XHJcbiAgICAgIHJlZ0V4cDogdGltZUhIX01NX1NTXzI0LFxyXG4gICAgICBlcnJvcixcclxuICAgICAgZXJyb3JOYW1lLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbi8qKlxyXG4gKiBAcHVibGljQXBpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDaGVja3MgaWYgYSB2YWx1ZSBpbiB0aGUgZ2l2ZW4gRnJvbUNvbnRyb2wgLyBBYnN0cmFjdENvbnRyb2wgaXMgaW4gYVxyXG4gKiBjb3JyZWN0IHVybCBmb3JtYXQuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB1cmxWYWxpZGF0b3IgPVxyXG4gIChcclxuICAgIGVycm9yTmFtZTogc3RyaW5nID0gXCJ1cmxcIixcclxuICAgIGVycm9yOiBzdHJpbmcgPSBcIkltcHJvcGVyIFVSTCBmb3JtYXQuXCJcclxuICApOiBWYWxpZGF0b3JGbiA9PlxyXG4gIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICByZXR1cm4gcmVnZXhwVmFsaWRhdGlvbihjb250cm9sLCB7IHJlZ0V4cDogdXJsLCBlcnJvciwgZXJyb3JOYW1lIH0pO1xyXG4gIH07XHJcblxyXG4vKipcclxuICogQHB1YmxpY0FwaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ2hlY2tzIGlmIGEgdmFsdWUgaW4gdGhlIGdpdmVuIEZyb21Db250cm9sIC8gQWJzdHJhY3RDb250cm9sIGlzIGluIG9uZSBvZiB0aGVcclxuICogZm9sbG93aW5nIGZvcm1hdHM6IDAwMDAwIG9yIDAwMDAwLTAwMDAuXHJcbiAqXHJcbiAqIEBwYXJhbSBlcnJvck5hbWUgICAgICAgICAgICAgICAgICAgLSBvcHRpb25hbCBwYXJhbWV0ZXIgcmVwcmVzZW50aW5nIGVycm9yIG5hbWVcclxuICogQHBhcmFtIGVycm9yICAgICAgICAgICAgICAgICAgICAgICAtIG9wdGlvbmFsIHBhcmFtZXRlciByZXByZXNlbnRpbmcgZXJyb3IgdmFsdWVcclxuICogQHJldHVybnMge1ZhbGlkYXRpb25FcnJvcnMgfCBudWxsfSAtIFZhbGlkYXRpb24gZXJyb3JcclxuICovXHJcbmV4cG9ydCBjb25zdCB6aXBDb2RlVmFsaWRhdG9yID1cclxuICAoXHJcbiAgICBlcnJvck5hbWU6IHN0cmluZyA9IFwiemlwQ29kZVwiLFxyXG4gICAgZXJyb3I6IHN0cmluZyA9IFwiSW1wcm9wZXIgemlwIGNvZGUgZm9ybWF0LlwiXHJcbiAgKTogVmFsaWRhdG9yRm4gPT5cclxuICAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgcmV0dXJuIHJlZ2V4cFZhbGlkYXRpb24oY29udHJvbCwgeyByZWdFeHA6IHppcENvZGUsIGVycm9yLCBlcnJvck5hbWUgfSk7XHJcbiAgfTtcclxuIl19